// TODO:60 fix how inconsistent all of the variable names are across here
// TODO: fix up the answer-remembering, it's really ugly code right now
window.onload = function () {
  // populate main list
  // <div class="item"><span class="my-handle">&nbsp;&#8801;&nbsp;</span>name</div>
  let unranked_list = document.getElementById('player_pool')
  let rankings_list = document.getElementById('ranking_list')

  window.unranked_sortable = Sortable.create(unranked_list, default_settings(100))
  window.rankings_sortable = Sortable.create(rankings_list, default_settings(100))

  if (verifyLocalFormData()) {
    console.log('form verified')
    applyLocalFormData()
  }
}

// Use some client-side handlebars to reload the lists if localstorage contaings data for them
function applyLocalFormData () {
  let listTemplateString = `
    {{#each inputArray}}
        <li class="list_player" data-id="{{{this}}}">
            <div class="player_name">{{{this}}}</div>
        </li>
    {{/each}}`

  let listTemplate = Handlebars.compile(listTemplateString)

  let unrankedContext = {inputArray: localStorage.getItem('player_list').split('|')}
  let rankingsContext = {inputArray: localStorage.getItem('ranking_list').split('|')}

  // console.log(listTemplate(rankingsContext))

  document.getElementById('player_pool').innerHTML = listTemplate(unrankedContext)
  document.getElementById('ranking_list').innerHTML = listTemplate(rankingsContext)

  document.getElementById('tag').value = localStorage.getItem('tag')

}

// Makes sure that the local data (if any exists) matches the current player list
function verifyLocalFormData () {
  let storedLists = new Set((localStorage.getItem('player_list').split('|').concat(
    localStorage.getItem('ranking_list').split('|'))))
  console.log(storedLists)

  for (let player of window.playerArray) {
    if (storedLists.has(player)) {
      continue
    } else {
      console.log(player)
      return 0
    }
  }
  return 1
}

function default_settings (animationSpeed) {
  return {
    group: {
      name: 'iDontKnowIfTheseNeedANameOrNotButItHasToBeTheSameAnywaysSoHereItIs',
      put: true,
      pull: true
    }, // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
    sort: true, // sorting inside list
    delay: 0, // time in milliseconds to define when the sorting should start
    disabled: false, // Disables the sortable if set to true.
    store: {
      get: (sortable) => {
        let order = localStorage.getItem(sortable.el.className)
        return order ? order.split('|') : []
      },
      set: (sortable) => {
        let order = sortable.toArray()
        localStorage.setItem(sortable.el.className, order.join('|'))
      }
    }, // @see Store
    animation: animationSpeed, // ms, animation speed moving items when sorting, `0` - without animation
    //        handle: ".my-handle", // Drag handle selector within list items
    filter: '.ignore-elements', // Selectors that do not lead to dragging (String or Function)
    draggable: '.list_player', // Specifies which items inside the element should be draggable
    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
    chosenClass: 'sortable-chosen', // Class name for the chosen item
    dataIdAttr: 'data-id',

    forceFallback: false, // ignore the HTML5 DnD behaviour and force the fallback to kick in
    fallbackClass: 'sortable-fallback', // Class name for the cloned DOM Element when using forceFallback
    fallbackOnBody: false, // Appends the cloned DOM Element into the Document's Body

    scroll: true, // or HTMLElement
    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
    scrollSpeed: 10, // px

    setData: function (dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent)
    },

    // dragging started
    onStart: function ( /**Event*/ evt) {
      // evt.oldIndex // element index within parent
    },

    // dragging ended
    onEnd: function ( /**Event*/ evt) {
      // evt.oldIndex; // element's old index within parent
      // evt.newIndex; // element's new index within parent
    },

    // Element is dropped into the list from another list
    onAdd: function ( /**Event*/ evt) {
      var itemEl = evt.item // dragged HTMLElement
    },

    // Changed sorting within list
    onUpdate: function ( /**Event*/ evt) {
      var itemEl = evt.item // dragged HTMLElement
    // + indexes from onEnd
    },

    // Called by any change to the list (add / update / remove)
    onSort: function ( /**Event*/ evt) {
      window.unranked_sortable.save()
      window.rankings_sortable.save()
    },

    // Element is removed from the list into another list
    onRemove: function ( /**Event*/ evt) {

    },

    // Attempt to drag a filtered element
    onFilter: function ( /**Event*/ evt) {
      var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
    },

    // // Event when you move an item in the list or between lists
    onMove: function ( /**Event*/ evt) {
      //     // Example: http://jsbin.com/tuyafe/1/edit?js,output
      //     evt.dragged // dragged HTMLElement
      //     evt.draggedRect; // TextRectangle {left, top, right ? bottom}
      //     evt.related // HTMLElement on which have guided
      //     evt.relatedRect // TextRectangle
      //     // return false; - for cancel
    }
  }
}

function tally () {
  // let debug_output = document.getElementById('debug')

  let unranked_list = document.getElementById('player_pool')
  let ranked_list = document.getElementById('ranking_list')
  let questions = document.getElementsByTagName('select')

  let tag = document.getElementById('tag').value
  let answers = []

  // Populate the array of unranked players by iterating through the html
  let unranked_list_array = parseListHTML(unranked_list)
  let ranked_list_array = parseListHTML(ranked_list)

  for (let q of questions) {
    answers.push(q.value)
  }

  let tally = {
    tag: tag,
    pr_list: ranked_list_array,
    unranked_players: unranked_list_array,
    answers: answers
  }

  let final_output = JSON.stringify(tally, null, ' ')

  console.log(final_output)

  submitFormJSON(final_output)

  // debug_output.value = final_output
}

function parseListHTML (input) {
  let output = []

  for (let node of input.childNodes) {
    if (node.className !== 'list_player') {
      continue
    }

    for (let subnode of node.childNodes) {
      if (subnode.className === 'player_name') {
        output.push(subnode.innerHTML)
      }
    }
  }
  return output
}

function submitFormJSON (jsonData) {
  fetch('http://localhost:3000/survey', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
    .then(response => {
      console.log(response)
    })
}

function saveTagString () {
  localStorage.setItem('tag', document.getElementById('tag').value)
}

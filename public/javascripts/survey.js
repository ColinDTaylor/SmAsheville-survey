// TODO: Learn what this is actually doing

window.onload = function() {
    // populate main list
    // <div class="item"><span class="my-handle">&nbsp;&#8801;&nbsp;</span>name</div>
    var player_list = document.getElementById('players');
    var players = [
        "player1",
        "player2",
        "player3",
        "player4",
        "player5"
    ];
    for (var i = 0; i < players.length; i++) {
        var new_player = document.createElement("div");
        new_player.className = "item";
        new_player.innerHTML = "<span class=\"my-handle\">&nbsp;&#8801;&nbsp;</span><span class=\"player_name\">" +
            players[i] +
            "</span>\n";
        player_list.appendChild(new_player);
    }
    var sortable1 = Sortable.create(player_list, default_settings("players"));

};

function tally() {
    var debug_output = document.getElementById("debug");
    var tag = document.getElementById("tag").value;

    var player_list = document.getElementById('players');
    var player_list_array = [];
    var na_list_array = [];

    var ranked = true;
    for (var i = 0; i < player_list.childNodes.length; i++) {

        var node = player_list.childNodes[i];

        if (node.className !== "item") {
            continue;
        }

        if (node.id === "placeholder") {
            ranked = false;
            continue;
        }

        var player_name = "unknown error";
        for (var j = 0; j < node.childNodes.length; j++) {
            var subnode = node.childNodes[j];
            if (subnode.className === "player_name") {
                player_name = subnode.innerHTML;
            }
        }

        if (ranked) {
            player_list_array.push(player_name);
        } else {
            na_list_array.push(player_name);
        }

    }

    var questions = document.getElementsByTagName("select");
    var answers = [];
    for (var n = 0; n < questions.length; n++) {
        var question = questions[n];
        answers.push(question.value);
    }

    var tally = {
        tag: tag,
        ranked_players: player_list_array,
        unranked_players: na_list_array,
        answers: answers
    };

    debug_output.value = JSON.stringify(tally, null, ' ');

}

function default_settings(newname) {
    return {
        group: {
            name: newname,
            put: false,
            pull: false
        }, // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
        sort: true, // sorting inside list
        delay: 0, // time in milliseconds to define when the sorting should start
        disabled: false, // Disables the sortable if set to true.
        store: null, // @see Store
        animation: 100, // ms, animation speed moving items when sorting, `0` - without animation
        handle: ".my-handle", // Drag handle selector within list items
        filter: ".ignore-elements", // Selectors that do not lead to dragging (String or Function)
        draggable: ".item", // Specifies which items inside the element should be draggable
        ghostClass: "sortable-ghost", // Class name for the drop placeholder
        chosenClass: "sortable-chosen", // Class name for the chosen item
        dataIdAttr: 'data-id',

        forceFallback: false, // ignore the HTML5 DnD behaviour and force the fallback to kick in
        fallbackClass: "sortable-fallback", // Class name for the cloned DOM Element when using forceFallback
        fallbackOnBody: false, // Appends the cloned DOM Element into the Document's Body

        scroll: true, // or HTMLElement
        scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
        scrollSpeed: 10, // px

        setData: function(dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
        },

        // dragging started
        onStart: function( /**Event*/ evt) {
            // evt.oldIndex; // element index within parent
        },

        // dragging ended
        onEnd: function( /**Event*/ evt) {
            // evt.oldIndex; // element's old index within parent
            // evt.newIndex; // element's new index within parent
        },

        // Element is dropped into the list from another list
        onAdd: function( /**Event*/ evt) {
            var itemEl = evt.item; // dragged HTMLElement
            // evt.from; // previous list
            // + indexes from onEnd
        },

        // Changed sorting within list
        onUpdate: function( /**Event*/ evt) {
            var itemEl = evt.item; // dragged HTMLElement
            // + indexes from onEnd
        },

        // Called by any change to the list (add / update / remove)
        onSort: function( /**Event*/ evt) {
            // same properties as onUpdate
        },

        // Element is removed from the list into another list
        onRemove: function( /**Event*/ evt) {
            // same properties as onUpdate
        },

        // Attempt to drag a filtered element
        onFilter: function( /**Event*/ evt) {
            var itemEl = evt.item; // HTMLElement receiving the `mousedown|tapstart` event.
        },

        // // Event when you move an item in the list or between lists
        onMove: function( /**Event*/ evt) {
        //     // Example: http://jsbin.com/tuyafe/1/edit?js,output
        //     evt.dragged; // dragged HTMLElement
        //     evt.draggedRect; // TextRectangle {left, top, right ? bottom}
        //     evt.related; // HTMLElement on which have guided
        //     evt.relatedRect; // TextRectangle
        //     // return false; - for cancel
        }
    };
}

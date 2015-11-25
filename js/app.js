$(document).foundation(); // initiate the UI framework

String.prototype.format = function() { // extends the String object with a new function called format, for templates
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};

function scrollToBottom () { // scroll to the bottom of the page
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');  
}

data = [
  {
    id: 1,
    description: 'Populate list: $.each(), $.map(), templates',
    completed: false
  },
  {
    id: 2,
    description: 'Update counter: $.grep(), change(), selector context, method chaining',
    completed: false
  },
  {
    id: 3,
    description: 'Remove item: parents(), click(), selector context',
    completed: false
  },
  {
    id: 4,
    description: 'Add item: .clone(), chaining unleashed',
    completed: false
  },
  {
    id: 5,
    description: 'Populate remote list: $.ajax()',
    completed: false
  }
];

$(document).ready(function () {
  console.log(data);

  // TODO: write todo code

});
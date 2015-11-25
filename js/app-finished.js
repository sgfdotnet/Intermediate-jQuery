$(document).foundation();

String.prototype.format = function() { // extends the String object with a new function called format
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};

function addTodo () {
  description = window.prompt('What todooey?');

  if (description.length > 0) {

    lastTodo = $('#todoList').children('.todo').last();

    if (lastTodo.length <= 0) {
      $('#todoList').html('The fault, dear Brutus, is not in our clone, but in logic, that we are cloning from nothing.');
      return;
    }

    nextId = eval(lastTodo.find('input').prop('id')) + 1;

    todo = lastTodo
      .clone()
      .find('input')
        .removeAttr('checked')
        .prop('id', nextId)
        .siblings('.switch-paddle').prop('for', nextId).end()
        .end()
      .find('h5')
        .html(description).end()
      .find('.remove')
        .click(function (e) {
          e.preventDefault();
          removeTodo(this);
        }).end()
      .change(function () {
        updateCounter();
      });
    $('#todoList').append(todo);
    
    updateCounter();
    scrollToBottom();
  }
}

function getTodos () {
  $.ajax('http://jsonplaceholder.typicode.com/users/1/todos', {
      method: 'GET'
    })
    .then(function(data) {
      $.each(data, function (index, value) {
        console.log('Found todo', value);
      });

      checked = $.grep(data, function (item) {
        return item.completed === true;
      });
      console.log(checked.length + ' todo\'s are completed');

      populateList(data);
    });
}

function populateList (items) {
  var todoTemplate = $('#todoTemplate').html();

  $('#todoList')
    .empty()
    .append($.map(items, function (item) {
        return todoTemplate.format(item.id, item.completed ? 'checked' : '', item.title);
      })
    );

  updateCounter();

  $('input', '#todoList').change(function () {
    updateCounter();
  });

  $('button.remove', '#todoList').click(function (e) {
    e.preventDefault();
    removeTodo(this);
  });
}

function removeTodo (button) {
  $(button).parents('.todo').remove();
  updateCounter();
}

function scrollToBottom () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');  
}

function updateCounter () {
  count = $('input:checked', '#todoList').length;
  total = $('input', '#todoList').length;

  if (count >= total) {
    $('.title-bar .label')
      .html('Complete')
      .addClass('complete');
  }
  else {
    $('.title-bar .label')
      .removeClass('complete')
      .empty()
      .append('<span id="count">' + count + '</span>')
      .append('/')
      .append('<span id="total">' + total + '</span>');
  }
}

$(document).ready(function () {
  getTodos();

  $('#add').click(function (e) {
    e.preventDefault();
    addTodo();
  });
});
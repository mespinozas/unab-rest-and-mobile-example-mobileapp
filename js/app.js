'use strict';

function MyViewModel(){

  var self = this;

  self.name = ko.observable('Yogurt');
  self.listData = ko.observableArray();
  self.messageError = ko.observable();

  self.create = function(){

  };

  self.getAll = function(){
    $.ajax({

      url: 	'http://127.0.0.1:8000/api/products',
      type: 'GET',
      dataType: 'json',
      timeout: 300,
      async:true,
      crossDomain:true,
      success: function(data){
        self.listData(data);
      },
      error: function(xhr, type){
        self.messageError('Ha ocurrido un error inesperado');
      }
    });
  };

};

var vm = new MyViewModel();
ko.applyBindings(vm, $('#main-wrapper')[0]);
vm.getAll();

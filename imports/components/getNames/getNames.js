import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Names } from '../../api/names.js';

import template from './getNames.html';

class NamesCtrl {
  constructor($scope) {
    console.log(this);
    $scope.viewModel(this);

    this.subscribe('names');

    // this.hideCompleted = false;

    this.helpers({
      tasks() {

      }
    });
  }

  // addTask(newTask) {
  //   // Insert a task into the collection
  //   Meteor.call('tasks.insert', newTask);
  //
  //   // Clear form
  //   this.newTask = '';
  // }

}

export default angular.module('getNames', [
  angularMeteor
])
  .component('getNames', {
    templateUrl: 'imports/components/getNames/getNames.html',
    controller: ['$scope', NamesCtrl]
  });

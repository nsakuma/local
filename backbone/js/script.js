
// Model
var MyModel = Backbone.Model.extend({
	method: function() {
		console.log('Hello Model!!');
	}
});
var myModel = new MyModel();
myModel.method();

// Collection
var MyCollection = Backbone.Collection.extend({});
var myCollection = new MyCollection([
	{name: 'hoge'},
	{name: 'fuga'}
]);
myCollection.each(function(e, i) {
	console.log('[' + i + '] ' + e.get('name'));
});

// view
$(function() {
	var MyView = Backbone.View.extend({
		render: function() {
			this.$el.text('Hello View!!');
			return this;
		}
	});
	var myView = new MyView();
	$('body').append(myView.render().el);
});
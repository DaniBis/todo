define(['backbone'],
	function(Backbone){
		return Backbone.Model.extend({
			default: function(){
				title:'';
				done:false;
			}
		});
	});

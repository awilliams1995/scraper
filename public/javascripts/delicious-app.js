import '../sass/style.scss';

import $ from 'jquery'

$(".unhide").on("click",function(){
	console.log(this)
	$("#"+$(this).attr("data-id")).show()
})


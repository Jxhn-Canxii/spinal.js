const spine = {
	getter1: function(url,input,n){
		$.get(XSS.url+url,input,function(data,status){;
			
		},"json");
	},
	getter2: function(url,input,n,t){
        let table = spine.tables(t);
        let clear = table.clear();
        let ajaxTime= new Date().getTime();
		$.get(XSS.url+url,input,function(data,status){
			 table.draw();
		},"json");
	},
	poster: function(url,data,n){
		$.post(XSS.url+url,data,function(data,status){
			 spine.loader();
			return true;
		},"json");
	},
	drag: function(id){
		$(id).draggable({
		scroll: true,
		scrollSensitivity: 40,
		scrollSpeed: 40
		});
	},
	loader1: function(){
		$.LoadingOverlay("show", {image: "",fontawesome : "fa fa-spinner fa-spin"});
		spine.timestopper(2,500,false);
    },
    loader2: function(id){
		$(id).LoadingOverlay("show", {image: "",background: "rgba(165, 190, 100, 0.5)",textAutoResize:true,fontawesome: "fa fa-spinner fa-pulse",text: "Compiling..."});
    },	
	handler: function(id,event,n,data){
		$(id).on(event, function() {
			
		});
	},
	timelord: function(n,time,value){
		setInterval(function(){
			
		},time);
	},
	timestopper: function(n,time,value){
		setTimeout(function(){
			
		},time);
	},
	toaster: function(title,description,res,position)
    {
        $(document).Toasts('create', {
        class: (res==false)? "bg-success" : "bg-danger",
        title: title,
        autohide: true,
        delay: 5000,
        position: position,
        body: description,
        })
    },
	error_message: function(res,status,task) {
        Swal.fire({
            icon: (res.error==false)? "success" : "error",
            title: (res.error==false)? "Success!" : "Warning!" ,
            text: res.message,
            timer: 2000
        })
    },
	serial: function(id){
		return $(id).serialize();
	},
	valve1: function(id){
		return $(id).val();
	},
	valve2: function(id,value){
		return $(id).val(value);
	},
	valve3: function(id,value){
		return $(id).text(value);
	},
	valve4: function(id,value){
		return $(id).val(value).trigger('change');
	},
	valve5: function(id,value,isRemoved){
		let removed = (isRemoved) ?  $(id).addClass(value) : $(id).removeClass(value);
		return removed;
	},
	valve6 : function(name)
    {
        return document.getElementsByName(name);
    },
    valve7: function(id,value){
		return $(id).html(value);
	},
	valve8: function(id,value,isRemoved){
		return  $(id).prop(value,isRemoved);
	},
	setItem: function(id,value){
		return localStorage.setItem(id,value);
	},
	getItem: function(id){
		return localStorage.getItem(id);
	},
	setSess:function(id,value){
		return sessionStorage.setItem(id,value);
	},
	getSess:function(id){
		return sessionStorage.getItem(id);
	},
	prop: function(id,name,value){
		return $(id).prop(name,value);
	},
	round: function(data){
		return data.toFixed(2);
	},
	isrefresh: function(){
		return false;
	},
	isreload: function(func){
		let i = spine.getItem('reload');
        return (performance.navigation.type == 1) ? spine.setItem('reload','reloaded') : false;
    },
	comma: function(money){
		let cash =  parseFloat(money).toFixed(2);
		return (money == 0) ? 0 : cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	derange: function(x,p)
    {

       return  (p) ? $(x).daterangepicker({dateLimit: { days: 6 },}) : $(x).daterangepicker();
    },
    remdiv: function(id){
    	return $(id).html('');
    },
	select2: function(x)
    {
        return $(x).select2({ "width" : "100%"});
    },
    dh: function(date,display,period,excess,max){
    	switch(display){
    		case 'Total Only':
    			return moment(date,"YYYY-MM-DD").format('ll');
    		break;
    		case 'Days':
    			return moment(date,"YYYY-MM-DD").format('ll');
    		case 'Weeks':
    			let start = moment(date,"YYYY-MM-DD");
    			let end =  moment(date,"YYYY-MM-DD").add(excess,'days');
    			let month = start.format('MMMM');
    			let year = start.format('YYYY');
    			let ld = new Date(year+"-"+month+"-"+max);
    			let firstday = moment(date,"YYYY-MM-01").format('MMM D');
    			let lastday = moment(ld,"YYYY-MM-").format('MMM D,YYYY');
    			let s_day = (display==='Weeks' && period==='Today' || period==='Yesterday') ? true : false;
    			let mnt = (display==='Weeks' && period ==='This Month' || period ==='Next Month' || period ==='Last Month') ? true : false;
    			return (s_day) ? start.format('MMM D, YYYY') : (mnt) ? firstday+" - "+lastday : (start===end) ? start.format('MMM D, YYYY') : start.format('MMM D')+"-"+end.format('MMM D, YYYY');
    		break;
    		case 'Years':
    			return "JAN-DEC "+moment(date,"YYYY-MM-DD").format('YYYY');
    		break;
    		case 'Months':
    			return moment(date,"YYYY-MM-DD").format('MMMM YYYY');
    		break;
    	}
    	
    },
    dr: function(date,display,period,excess){
    	switch(display){
    		case 'Total Only':
    			return moment(date,"YYYY-MM-DD").format('ll');
    		break;
    		case 'Days':
    			return moment(date,"YYYY-MM-DD").format('ll');
    		case 'Weeks':
    			let s_day = (display==='Weeks' && period==='Today' || period==='Yesterday') ? true : false;
    			let start = moment(date,"YYYY-MM-DD");
    			let end =  moment(date,"YYYY-MM-DD").add(excess,'days');
    			return (s_day) ? start.format('MMM D, YYYY') : (start===end) ? start.format('MMM D, YYYY') : start.format('MMM D')+"-"+end.format('MMM D, YYYY');
    			console.log(start===end);
    		break;
    		case 'Years':
    			return "JAN-DEC "+moment(date,"YYYY-MM-DD").format('YYYY');
    		break;
    		case 'Months':
    			return moment(date,"YYYY-MM-DD").format('MMMM YYYY');
    		break;
    	}
    	
    },
	tables: function(id){
	$.fn.dataTable.ext.errMode = 'none';
	let top = {'Autowidth' : true,width: "100%", "info" : false,"search" : true,"paging": false,};
	let basic = {'Autowidth' : true,width: "100%",scrollX: "100%","aaSorting": [[0,'desc']],};
	let content = (id===jrnl.table) ? basic : (id===bal.bt) ? top : false;
	return $(id).DataTable(content);
	},

	month: function(n){
		switch(n){
			case 1:
			return 'January';
			break;
			case 2:
			return 'February';
			break;
			case 3:
			return 'March';
			break;
			case 4:
			return 'April';
			break;
			case 5:
			return 'May';
			break;
			case 6:
			return 'June';
			break;
			case 7:
			return 'July';
			break;
			case 8:
			return 'August';
			break;
			case 9:
			return 'September';
			break;
			case 10:
			return 'October';
			break;
			case 11:
			return 'November';
			break;
			case 12:
			return 'December';
			break;
		}
	},
	scroll: function(id)
    {
            $(id).overlayScrollbars({
                className       : "os-theme-dark",
                resize          : "both",
                sizeAutoCapable : true,
                paddingAbsolute : true,

                scrollbars : {
                clickScrolling : true
                },
                overflowBehavior : {
                x : "scroll",
                y : "scroll"
                },
            });
    },
    randomize: function()
    {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    },
    propogater: function(){
		$('.dropdown-menu').on('click', function(e) {
			e.stopPropagation();
		});
    },
    loadtime: function(){
		let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
		let time = 100 / loadTime;
		console.log('Load time: '+ time.toFixed(2) +' seconds');
    }
}

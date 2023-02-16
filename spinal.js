const spine = {
	getter1: function(url,input,n){
		$.get(XSS.url+url,input,function(data,status){;
			switch(n){
				case 1:
				spine.valve3(dash.occupant,data);
				break;
				case 2:
				spine.valve3(dash.booking,data);
				break;
				case 3:
				spine.valve3(dash.sales,spine.comma(data));
				break;
				case 4:
				spine.valve3(dash.employee,data);
				break;
				case 5:
				spine.setItem(t.target,data);
				break;
				case 6:
				spine.setItem(t.c,data);
				break;
				case 7:
				jt.dropper(data,input);
				break;
				case 8:
				jt.imbalance(data);
				break;
			}
		},"json");
	},
	getter2: function(url,input,n,t){
        let table = spine.tables(t);
        let clear = table.clear();
        let ajaxTime= new Date().getTime();
		$.get(XSS.url+url,input,function(data,status){
			 if(clear){
			 	if(n==1){
					if(data['credit_array']){
						let darr = [];
						let carr = [];
						let je = [];
						for (var c = data['credit_array'].length - 1; c >= 0; c--) {
							carr += data['credit_array'][c].total;
							je += data['credit_array'][c].je;
						}
						for (var d = data['debit_array'].length - 1; d >= 0; d--) {
							darr += data['credit_array'][d].je+COMMA;
						}
						console.log(String(carr).split(","));
			 		}
			 		for (var i = data['data'].length - 1; i >= 0; i--) {
			 			jt.append(data['data'],i,table);
			 		}
				}		
			 	if(n==2){
			 		$.each(data, function(i, item) {
						spine.valve3(jrnl.credit,spine.comma(data['credit']));
						spine.valve3(jrnl.debit,spine.comma(data['debit']));
						spine.valve3(jrnl.credit+'_bot',spine.comma(data['credit']));
						spine.valve3(jrnl.debit+'_bot',spine.comma(data['debit']));
					});
			 	}
			 	//for multiple array
			 	if(n==3){
					if(data['data']){
						console.log(data.print);
						if(data.print==='true'){
							window.open(XSS.url+jour.link7,'_blank');				
						}
						spine.valve3(jrnl.credit,spine.comma(data['credit']));
						spine.valve3(jrnl.debit,spine.comma(data['debit']));
						spine.valve3(jrnl.credit+'_bot',spine.comma(data['credit']));
						spine.valve3(jrnl.debit+'_bot',spine.comma(data['debit']));
						for (var i = data['data'].length - 1; i >= 0; i--) {
							jt.append(data['data'],i,table);
						}
					}else{
						let message_content = (input.print) ? "Cannot print empty results" : "No results found!";
						let message = {
							message: message_content,
							error: true,
						}
						spine.valve3(jrnl.credit,0.00);
						spine.valve3(jrnl.debit,0.00);
						spine.valve3(jrnl.credit+'_bot',0.00);
						spine.valve3(jrnl.debit+'_bot',0.00);
						spine.error_message(message,false,false);
					}
			 	}
			 	if(n==4){
			 		sheet.append(data);
			 		$(bal.bs).LoadingOverlay("hide",true);
			 		$(common.submit).LoadingOverlay("hide",true);
			 		spine.valve5(common.submit,'disabled',false);

			 	}
			 }
			 		spine.loadtime();
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
			switch(n){
				case 1:
				return false;
				break;
				case 2:
				let message_content = "Data restored";
				let message = {
					message: message_content,
					error: false,
				}
				if(data){
					spine.prop(jrnl.dcheck,j.check,true);
					spine.prop(jrnl.date,j.disable,true)
					spine.valve4(jrnl.type,j.all);
					spine.valve4(jrnl.name,j.all);
					spine.valve4(jrnl.acnt,j.all);
					spine.valve4(jrnl.jeno,j.all);
					spine.valve4(jrnl.desc,j.all);
				}
				spine.error_message(message,false,false);
				journal();
				total();
				break;
				case 3:
				filter(data);
				console.log(data);
				break;
				case 4:
				let title = 'Attention!';
				let checker =  $(common.dark).is(":checked");
				let checked = (checker) ? DARK_MODE : '';
				let mode = (checker===DARK_MODE || checker!='') ? "Dark mode " : "Light mode ";
				spine.toaster(title,mode+" activated!",false,tP.bL)
				spine.setItem(common.darker,checked);
				break;
			}
		});
	},
	timelord: function(n,time,value){
		setInterval(function(){
			switch(n){
				case 1:
				let dark = spine.getItem(common.darker);
				(dark===DARK_MODE || dark!='') ? spine.valve3(common.blacklabel,'Dark Mode') : spine.valve3(common.blacklabel,'Light Mode');
				(dark===DARK_MODE || dark!='') ? spine.prop(common.dark,j.check,true) : spine.prop(common.dark,j.check,false);
				spine.valve5(common.body,DARK_MODE,dark);
				break;
			}
		},time);
	},
	timestopper: function(n,time,value){
		setTimeout(function(){
			switch(n){
				case 1:
				target();
				chart();
				break;
				case 2:
				return $.LoadingOverlay("hide");
				break;
			}
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

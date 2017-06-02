class mobileMenu {
	constructor() {
		this.baseSlide = document.querySelector('.siteHeaderMobile__menu-baseSlide');
		this.baseSlideLi = document.querySelectorAll('.siteHeaderMobile__menu-baseSlide > li');

		for (var i = this.baseSlideLi.length - 1; i >= 0; i--) {

			this.baseSlideLi[i].addEventListener('click',(event)=>{
				this.menuLogic(event);
			});
		}


		this.button = document.querySelector('.siteHeaderMobile__button');

		this.button.addEventListener('click',() => {
			// так как checked сработает после js то делаем действия наоборот
			if (document.getElementById('showMenuMobile__FasXdFe').checked) {
				

				document.documentElement.style.overflow = 'auto';
			} else {
				//баг прыжка скролла можно убрать используя transitionend + overflow : hidden;
				
				
				document.documentElement.style.overflow = 'hidden';
			}
		});

		this.inputSearch = document.querySelector('.siteHeaderMobile__searchInput');


		this.mobileAutorization();
		window.addEventListener('resize',this.mobileAutorization);
	}

	mobileAutorization() {
		if (document.body.clientWidth > 1000 ) {
			

			return;
		}

		let accountIcons = [document.querySelector('.siteHeaderMobile__visualNav-account'),
							 document.querySelector('.siteHeaderMobile__account')];

		let bg = document.querySelector('.container__autorization')

		function addListeners() {
				document.querySelector('.container__autorization').classList.toggle('container__autorization--show');
		}
		for (var i = accountIcons.length - 1; i >= 0; i--) {
			accountIcons[i].addEventListener('click', addListeners);
		}

		function addListenerBg(event) {
			if (event.target == event.currentTarget) {
				document.querySelector('.container__autorization').classList.toggle('container__autorization--show');
			}
		}
		bg.addEventListener('click', addListenerBg);
		
	}

	menuLogic(event) {
		let el = event.target.closest('ul').classList.contains('siteHeaderMobile__menu-baseSlide');

		if (el) {
			el = event.target.closest('li');
			this.liClose = document.createElement('li');
			this.liClose.classList.add('siteHeaderMobile__menuClose');
			this.liClose.innerHTML = `
				<div>
					<span>
						<svg class="siteHeaderMobile__arrow" viewBox="0 0 48 48">
							<use xlink:href="#icon-arrow">
						</use></svg>
						<span>Вернуться</span>
					</span>
				</div>`;
			this.liColumnInfo = document.createElement('li');


			this.spisokName = event.target.closest('li').querySelector('div').cloneNode(true);
			this.spisokName.querySelector('.siteHeaderMobile__arrow').remove();
			this.liColumnInfo.prepend(this.spisokName);

			this.child = el.querySelector('ul');
			this.child.prepend(this.liColumnInfo);
			this.child.prepend(this.liClose);



			this.child.style.display = 'block';
			this.baseSlide.style.overflow = 'hidden';
			this.baseSlide.scrollTop = '0';
		
		} else if(event.target.closest('.siteHeaderMobile__menuClose')) {

			this.child.style.display = 'none';
			this.baseSlide.style.overflow = 'auto';

			this.liClose.remove();
			this.liColumnInfo.remove();
			console.log(this.liClose,this.liColumnInfo);
			
			this.spisokName = '';
		}
	}
}


class templateCatalogNav {
	constructor() {




		this.men = new pageDraw({
			data: '/men.html',
			element:'ul'
		});
		this.men.data.then((data)=>{
			this.men.content = data;
			this.men.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-men')];
			this.men.draw;
		});


		this.woman = new pageDraw({
			data: '/woman.html',
			element:'ul'
		});
		this.woman.data.then((data)=>{
			this.woman.content = data;
			this.woman.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-woman')];
			this.woman.draw;
		});

		this.boy = new pageDraw({
			data: '/men.html',
			element:'ul'
		});
		this.boy.data.then((data)=>{
			this.boy.content = data;
			this.boy.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-boy')];
			this.boy.draw;
		});


		this.girl = new pageDraw({
			data: '/woman.html',
			element:'ul'
		});
		this.girl.data.then((data)=>{
			this.girl.content = data;
			this.girl.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-girl')];
			this.girl.draw;
		});

		this.collection = new pageDraw({
			data: '/collection.html',
			element:'ul'
		});
		this.collection.data.then((data)=>{
			this.collection.content = data;
			this.collection.position = ['beforeend',document.querySelector('.siteHeaderMobile__menu-collections')];
			this.collection.draw;
		});

		this.icons = new pageDraw({
			data: '/icons.html',
			position:['afterend',document.querySelector('header')]
		});
		this.icons.data.then((data)=>{
			this.icons.content = data;
			this.icons.draw;
		});


		setTimeout(()=>(new mobileMenu()),1240);
	}

	
}

new templateCatalogNav();
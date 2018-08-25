"use strict"
var sm = new SmartHouse()
var shdiv = document.createElement('div');
document.body.appendChild(shdiv)
var shform = document.createElement('form');
shform.name = "shf";
shdiv.appendChild(shform);

var inputSH = document.createElement('input');
inputSH.value = 'Добавить холодильник'
inputSH.type = 'button';
inputSH.name = 'SHfridge'
shform.appendChild(inputSH)

var inputSh2 = document.createElement('input');
inputSh2.name = 'SHheater'
inputSh2.type = 'button';
inputSh2.value = 'Добавить обогреватель';
shform.appendChild(inputSh2)

var inputSh3 = document.createElement('input');
inputSh3.name = 'SHlamp'
inputSh3.type = 'button';
inputSh3.value = 'Добавть лампу';
shform.appendChild(inputSh3);

var inputSh4 = document.createElement('input');
inputSh4.name = 'SHtv'
inputSh4.type = 'button';
inputSh4.value = 'Добавть телевизор';
shform.appendChild(inputSh4);


inputSH.addEventListener('click', function () {
    var fridge = new Fridge()
    sm.addDevices(fridge)
    var fridgediv = document.createElement('div');
    fridgediv.id = 'myfdiv';
    document.body.appendChild(fridgediv);

    var btn1 = document.createElement('input');
    btn1.id = ' input1';
    btn1.name = ' input1';
    btn1.value = 'Включить холодильник';
    btn1.type = 'button';

    btn1.addEventListener('click', function () {
        fridge.on();
        btn1.style.display = 'none';
        var imgf = document.createElement('img')
        imgf.src = 'https://liebherr.com.ua//images/product-Vstraivaemiy-holodilnik-Side-by-Side-Liebherr-SBS-66I3_bc485ba236c517b7c3c56efde71488c7.jpg'
          imgf.width = '300';
        imgf.height = '600';
		fridgediv.appendChild(imgf)

        var formf = document.createElement('form');
        formf.name = "f";
        fridgediv.appendChild(formf)

        var btn2 = document.createElement('input');
        btn2.value = 'Задать температуру'
        btn2.type = 'number';
        btn2.name = 'namef'
        formf.appendChild(btn2)

        var inputf3 = document.createElement('input');
        inputf3.name = 'btnf'
        inputf3.type = 'button';
        inputf3.value = 'Установить температуру';
        formf.appendChild(inputf3)

        var ul = document.createElement('ul');
        ul.id = 'fridge1';
        document.body.appendChild(ul);
        var inpf = document.forms.f.elements.namef;
        var addf = document.forms.f.elements.btnf;
        var fridge1 = document.getElementById('fridge1');
        addf.addEventListener('click', function () {
            fridge.increaseTemp(inpf.value);
            var li = document.createElement('li');
            li.id = 'list'
            li.innerText = inpf.value;
            fridge1.appendChild(li);

        })	
		
		var formf2 = document.createElement('form');
        formf2.name = "f2";
        fridgediv.appendChild(formf2)
        var inputf3 = document.createElement('button');
        inputf3.value = 'off'
        inputf3.type = 'number';
        inputf3.name = 'namef3';
		inputf3.innerText = 'Выкл';
        formf2.appendChild(inputf3)

        
		
        var inp2 = document.forms.f2.elements.namef3;
        var add2 = document.forms.f2.elements.btn2;
       
    })
    fridgediv.appendChild(btn1)
})

inputSh2.addEventListener('click', function() {
	
	var heater = new Heater('UFO')
	sm.addDevices(heater)
	var heaterdiv = document.createElement('div');
	heater.id = 'myHeaterDiv';
	document.body.appendChild(heaterdiv);
	
	var btnH = document.createElement('input');
	btnH.id = 'input2';
	btnH.name = 'input2';
	btnH.value = "Включить обогреватель";
	btnH.type = 'button';
	
	btnH.addEventListener('click', function() {
		
		heater.on();
		btnH.style.display = 'none';
		var imgf = document.createElement('img')
		imgf.src = 'https://i1.rozetka.ua/goods/184135/saturn-st-ht8641_images_184135262.jpg'
	    imgf.width = '300';
        imgf.height = '600';
		heaterdiv.appendChild(imgf)
		
		var formh = document.createElement('form');
		formh.name = 'h';
		heaterdiv.appendChild(formh)
		
		var btnH2 = document.createElement('input');
		btnH2.value = 'Задать яркость'
		btnH2.type = 'number';
		btnH2.name = 'heaterSH'
		formh.appendChild(btnH2)
		
		var btnH3 = document.createElement('input');
		btnH3.name = 'btnH'
		btnH3.type = 'button';
		btnH3.value = 'Установить яркость';
		formh.appendChild(btnH3)
		
		
        var inph = document.forms.h.elements.heaterSH;
        var addh = document.forms.h.elements.btnH;
        var heater1 = document.getElementById('heater1');
        
		
		var ul = document.createElement('ul');
        ul.id = 'heater1';
        document.body.appendChild(ul);
        var inph = document.forms.h.elements.btnH;
        var addh = document.forms.h.elements.btnH3;
        var heater1 = document.getElementById('heater1');
        addh.addEventListener('click', function () {
            heater.increaseTemp(inph.value);
            var li = document.createElement('li');
            li.id = 'list'
            li.innerText = inph.value;
            heater1.appendChild(li);
        })
	
	})
	 heaterdiv.appendChild(btnH)
})
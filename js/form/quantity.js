const saveParagraph = document.querySelector('.js_save');
const originalParagraph = document.querySelector('.js_original');
const topPriceParagraph = document.querySelector('.js_price');
const topBlock = document.querySelector('.js_form__title-box');
const headphonesBlock = document.querySelector('.js_total');
const additionalBlock = document.getElementById('silicone_case');
const additionalInput = document.querySelector('.js_additional');
const total = document.getElementById('total_1');
const totalBlock = document.querySelector('.js_total_1');
const terms = document.getElementById('terms');
const bottomHeadphonesPrice = document.getElementById('terms_price');
const bottomAdditionalPrice = document.getElementById('express_terms');
const bottomTotalPrice = document.getElementById('total_2');
const submitBtn = document.getElementById('place_order');
const errorMessage = document.querySelector('.js_error-message');
const quantityInput = document.querySelector('.js_quantity');
const headphonesPrice = document.getElementById('chosen_price');
const prevQuantityBtn = document.querySelector('.js_quantity_prev');
const nextQuantityBtn = document.querySelector('.js_quantity_next');
const defaultText = topPriceParagraph.textContent;

const amountOfProduct = 12;
const additionalProductPrice = 5.95;

// HIDE START
saveParagraph.style.display = 'none';
originalParagraph.style.display = 'none';
errorMessage.style.display = 'none';
topBlock.style.display = 'none';
headphonesBlock.style.display = 'none';
additionalBlock.style.display = 'none';
terms.style.display = 'none';
submitBtn.style.display = 'none';
totalBlock.style.display = 'none';
bottomAdditionalPrice.style.display = 'none';
// HIDE END
quantityInput.addEventListener('input', changeQuantity);
additionalInput.addEventListener("change", chackedAdditionalInput);
prevQuantityBtn.addEventListener('click', increaseQuantity);
nextQuantityBtn.addEventListener('click', decreaseQuantity);
let quantity = 0;

function increaseQuantity(e) {
    if(Number(quantityInput.value) === 0) {
        e.currentTarget.classList.add('btn-disable');
        nextQuantityBtn.classList.remove('btn-disable');
    } else {
        quantityInput.value = Number(quantityInput.value) - 1;
        nextQuantityBtn.classList.remove('btn-disable');
    }
    changeQuantity(quantityInput.value);
}

function decreaseQuantity(e) {
    if(Number(quantityInput.value)  === amountOfProduct) {
        e.currentTarget.classList.add('btn-disable');
        prevQuantityBtn.classList.remove('btn-disable');
    } else {
        quantityInput.value = Number(quantityInput.value) + 1;
        prevQuantityBtn.classList.remove('btn-disable');
    }
    changeQuantity(quantityInput.value);
}

function chackedAdditionalInput(e) {
    const checked = e.target.checked;
    console.log('inputChecked: ', checked);
    console.log(quantity);
    if(checked && quantity === 0) {
        additionalBlock.style.display = 'block';
        topBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        submitBtn.style.display = 'block';
        terms.style.display = 'flex';
        total.textContent = `$ ${additionalProductPrice}`;
        bottomHeadphonesPrice.style.display = 'none';
        bottomAdditionalPrice.style.display = 'inline-block';
        bottomTotalPrice.textContent = `$ ${additionalProductPrice}`;
    } else if (!checked && quantity === 0) {
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'none';
        totalBlock.style.display = 'none';
        submitBtn.style.display = 'none';
        terms.style.display = 'none';
    } else if(checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        additionalBlock.style.display = 'block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        total.textContent = `$ ${((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100}`;
        bottomTotalPrice.textContent = `$ ${((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100}`;
        bottomAdditionalPrice.style.display = 'inline-block';
    } else if(!checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        total.textContent = `$ ${priceAmount(quantity)}`;
        bottomTotalPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomAdditionalPrice.style.display = 'none';
    }
}

function changeQuantity(e) {
    // const quantity = Number(e.target.value);
    if(e.target) {
        quantity = Number(e.target.value);
    } else {
        quantity = Number(e);
    }
    enterMoreThanThereIs(quantity);
    setTopTitle(quantity);
    showBottomBlocks(quantity);
}

function showBottomBlocks(quantity) {
    if(additionalInput.checked && quantity > 0 && quantity <= amountOfProduct) {
        additionalBlock.style.display = 'block';
        bottomHeadphonesPrice.style.display = 'inline-block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        total.textContent = `$ ${((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100}`;
        bottomTotalPrice.textContent = `$ ${((additionalProductPrice * 100) + (priceAmount(quantity) * 100)) / 100}`;
        bottomAdditionalPrice.style.display = 'inline-block';
    } else if(!additionalInput.checked && quantity > 0 && quantity <= amountOfProduct) {
        bottomHeadphonesPrice.style.display = 'inline-block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'flex';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        headphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomHeadphonesPrice.textContent = `$ ${priceAmount(quantity)}`;
        total.textContent = `$ ${priceAmount(quantity)}`;
        bottomTotalPrice.textContent = `$ ${priceAmount(quantity)}`;
        bottomAdditionalPrice.style.display = 'none';
    } else if(additionalInput.checked && quantity === 0) {
        bottomHeadphonesPrice.style.display = 'none';
        additionalBlock.style.display = 'block';
        topBlock.style.display = 'flex';
        headphonesBlock.style.display = 'none';
        totalBlock.style.display = 'flex';
        terms.style.display = 'flex';
        submitBtn.style.display = 'block';
        total.textContent = `${additionalProductPrice}`;
        bottomAdditionalPrice.style.display = 'none';
    } else if(!additionalInput.checked && quantity === 0) {
        additionalBlock.style.display = 'none';
        topBlock.style.display = 'none';
        headphonesBlock.style.display = 'none';
        totalBlock.style.display = 'none';
        terms.style.display = 'none';
        submitBtn.style.display = 'none';
    }
}

function priceAmount(value) {
    switch(value) {
        case 0:  
        return 0; 
        case 1:  
        return 19.99;  
        case 2: 
        return 24.99;
        case 3:
        return 35.32;
        case 4:
        return 39.99;
        case 5:
        return 43.98;
        case 6:  
        return 49.95;
        case 7:
        return 69.99;
        case 8:
        return 79.99;
        case 9:
        return 84.41;
        case 10:
        return 89.99;
        case 11:
        return 109;
        case 12:
        return 119;
    }
}

function setTopTitle(quantity) {
    if(typeof quantityLabelOptions(quantity) === 'string' && quantity > 0) {
        topPriceParagraph.textContent = quantityLabelOptions(quantity);
        saveParagraph.style.display = 'none';
        originalParagraph.style.display = 'none';
    } else if(typeof quantityLabelOptions(quantity) === 'string') {
        topPriceParagraph.textContent = quantityLabelOptions(quantity);
        saveParagraph.style.display = 'none';
        originalParagraph.style.display = 'none';
    } else if(typeof quantityLabelOptions(quantity) === 'object') {
        const title = quantityLabelOptions(quantity).title;
        const original = quantityLabelOptions(quantity).original;
        const save = quantityLabelOptions(quantity).save;
        saveParagraph.style.display = 'block';
        originalParagraph.style.display = 'inline-block';
        topPriceParagraph.textContent = title;
        saveParagraph.textContent = save;
        originalParagraph.textContent = original;
    }
}


function quantityLabelOptions(quantity) {
    switch(quantity) {
        case 0:  
        return defaultText; 
        case 1:  
        return '1 pack $19.99';  
        case 2: 
        return {
          title: '2 Packs $24.99',
          original: '- Original $39.98',
          save: 'Save $14.99',
        };
        case 3:
        return {
            title: '3 Packs $35.32',
            original: '- Original $59.97',
            save: 'Save $24.65',
        };
        case 4:
        return {
            title: '4 Packs $39.99',
            original: '- Original $79.96',
            save: 'Save $39.97',
        };
        case 5:
        return {
            title: '5 Packs $43.98',
            original: '- Original $99.95',
            save: 'Save $55.97',
        };
        case 6:  
        return {
            title: '6 Packs $49.95',
            original: '- Original $119.94',
            save: 'Save $69.99',
        };
        case 7:
        return {
            title: '7 Packs $69.99',
            original: '- Original $139.93',
            save: 'Save $69.94',
        };
        case 8:
        return {
            title: '8 Packs $79.99',
            original: '- Original $159.92',
            save: 'Save $79.93',
        };
        case 9:
        return {
            title: '9 Packs $84.41',
            original: '- Original $179.91',
            save: 'Save $95.50',
        };
        case 10:
        return {
            title: '10 Packs $89.99',
            original: '- Original $199.90',
            save: 'Save $109.91',
        };
        case 11:
        return {
            title: '11 Packs $109',
            original: '- Original $219.89',
            save: 'Save $110.89',
        };
        case 12:
        return {
            title: '12 Packs $119',
            original: '- Original $239.88',
            save: 'Save $120.88',
        };
    }
}

function enterMoreThanThereIs(quantity) {
    if(quantity > amountOfProduct) {
        errorMessage.style.display = 'block';
        topPriceParagraph.textContent = defaultText;
        saveParagraph.style.display = 'none';
        originalParagraph.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
    }
}




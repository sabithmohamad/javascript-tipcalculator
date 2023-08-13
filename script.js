const billtotal = document.getElementById('billTotalInput')
const tipinput = document.getElementById('tipInput')
const numberofpropleDiv = document.getElementById('numberOfPeople')
const perPersonTotaldiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberofpropleDiv.innerText)

const calculateBill = () => {

  const bill = Number(billtotal.value)
  const tippercentage = Number(tipinput.value) /100
  const tipamount = tippercentage * bill
  const total = tipamount + bill
  const perPersonTotal = total / numberOfPeople
  perPersonTotaldiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {

  numberOfPeople += 1

  numberofpropleDiv.innerText = numberOfPeople 
  calculateBill()
}

const decreasePeople = () => {

  

  if(numberOfPeople <=1){
    return
  }

  numberOfPeople -= 1
  numberofpropleDiv.innerText = numberOfPeople

  calculateBill()

}
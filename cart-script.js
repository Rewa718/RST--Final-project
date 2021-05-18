// call each product's strings to dynamically display each product in the user's cart
const params = new URLSearchParams(window.location.search)
const name = params.get('name')
// create a switch case to dynamically display the products placed in cart
switch (name) {
  case 'Moleskinebook':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;" src="/images/draw.jpg" alt="Moleskine Sketchbook">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;">$19.99</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Moleskine Art sketchbook</p>'
    break
  case 'Strathmore book':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/strathmore.jpg" alt="Strathmore book">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;">$15.86</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Strathmore sketchbook</p>'
    break
  case 'Prisma':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/color.jpg" alt="Pencilcrayons">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;">$25.99</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Prismacolor scholar pencil crayons</p>'
    break
  case 'Crayola':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/crayola.jpg" alt="crayola">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;">$20.99</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Crayola pencil crayons</p>'
    break
  case 'Poster':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/paint1.jpg" alt="postercolor">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;"> $10.87</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Poster colour paints</p>'
    break

  case 'Liquitex':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/paint2.jpg" alt="Liquitex">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;"> $15.00</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Liquitex basics paint set</p>'
    break
  case 'Benicci':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/brush1.jpg" alt="brush1">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;"> $10.87</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Benicci paint brush set</p>'
    break
  case 'Paint1':
    document.getElementById('displayans').innerHTML += '<img style="position:fixed;width:50px;top:200px;left:100px;"src="/images/probrush.jpg" alt="brush2">'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;top:200px;left:170px;"> $10.87</p>'
    document.getElementById('displayans').innerHTML += '<p style="position:fixed;left:250px;top:200px;">Paint brush set</p>'
}
// connect "paynow" button to "text" function
document.getElementById('paynow').addEventListener('click', text)
// when user enters payment information in the provided textboxes and clicks the button, create a function to display order confirmation message
function text() {
  document.getElementById('billnum').innerHTML = '<p style="font-size:20px;margin-left:200px;margin-top:400px;"><b>Your order has been confirmed. It will be delivered within five business days<b></p>'
}
// connect "search" button with "myResults" function
document.getElementById('search').addEventListener('click', myResults)

function myResults() {
  const research = document.getElementById('type').value
  // create switch cases for every possible search bar results

  switch (research) {
    case 'sketchbooks':
      location.href = '/webpages/Sketchbooks.html'
      break

    case 'pencil crayons':
      location.href = '/webpages/pencilcrayons.html'
      break

    case 'paints':
      location.href = '/webpages/paints.html'
      break

    case 'paint brushes':
      location.href = '/webpages/paintbrush.html'
      break
    // create case for home page to load if user searches randomly, and not according to program
    default:
      location.href = '/index.html'
  }
}

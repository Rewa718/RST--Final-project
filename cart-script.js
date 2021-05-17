const params = new URLSearchParams(window.location.search)
const name = params.get('name')
const price = params.get('price')

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
document.getElementById('change-text').addEventListener('click', text)

function text () {
  document.getElementById('billnum').innerHTML = '<p style="font-size:20px;margin-left:200px;margin-top:400px;"><b>Your order has been confirmed. It will be delivered within five business days<b></p>'
}
document.getElementById('search').addEventListener('click', myResults)

 function myResults () {
  const research = document.getElementById('type').value

  switch (research) {
    case 'sketchbooks':
    location.href='/webpages/Sketchbooks.html'
    break

    case 'pencil crayons':
    location.href='/webpages/pencilcrayons.html'
    break

    case 'paints':
    location.href='/webpages/paints.html'
    break
    
    case 'paint brushes':
    location.href='/webpages/paintbrush.html'
    break

    default:
    location.href='/index.html'
  }
 }

  





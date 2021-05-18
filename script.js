// call each product strings to dynamically display on productdetails webpage
const params = new URLSearchParams(window.location.search)
const name = params.get('name')
// create switch case to dynamically display all product images, description, and button on a single webpage
switch (name) {
  // create dynamic display for the Moleskine sketchbook product
  case 'Moleskinebook':
    document.getElementById('displayimage').innerHTML += '<img src="/images/draw.jpg" alt="Sketchbooks" height="400"><br>'
    document.getElementById('displayimage').innerHTML += '<p>Moleskine Art Sketchbook</p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fourstar.jpg" alt="fourstar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$19.99</h3>'

    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">The perfect portable canvas for capturing sketches and drawings in the studio or on the move. This classic black Sketchbook is made using quality sketch-grade paper that supports a variety of artistic media and stands up to eraser use. Each Sketchbook becomes an archive of your art and includes essential Moleskine features such as rounded corners, a bookmark ribbon and an elastic closure to secure your drawings.<br><br> Designed for professionals and anyone with a passion for art, Moleskine Sketchbooks make space for you to observe, imagine, sketch and draw your world.</p><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Moleskinebook"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for the Strathmore book product
  case 'Strathmore book':
    document.getElementById('displayimage').innerHTML += '<img src="/images/strathmore.jpg" alt="Sketchbooks" height="400"><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Strathmore Sketchbook</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fivestar.png" alt="fivestar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$15.86</h3>'

    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">The Strathmore 400 Series Sketch is filled with fine tooth, heavyweight, 60 lb paper ideal for experimentation, perfecting techniques, and preliminary drawing in any dry media. Try this sketchbook with graphite pencil, colored pencil, charcoal, sketching stick, soft pastel, and oil pastel</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Strathmore book"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for prisma color pencil crayons
  case 'Prisma':
    document.getElementById('displayimage').innerHTML += '<img src="/images/color.jpg" alt="Pencilcrayons" width="400"><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Prismacolor scholar pencil crayons</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fivestar.png" alt="fivestar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$25.99</h3>'
    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">Like other Prismacolor art supplies, these Scholar Colored Pencils feature rich, vibrantly pigmented colors, along with soft, creamy leads that allow students to practice blending and shading and develop as artists</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Prisma"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for crayola pencil crayons
  case 'Crayola':
    document.getElementById('displayimage').innerHTML += '<img src="/images/crayola.jpg" alt="Crayola pencil crayons" width="400"><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Crayola pencil crayons</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fourstar.jpg" alt="fourstar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$20.99</h3>'
    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">Crayola Coloured Pencils are made with thick, soft leads, so they will not break easily under pressure. ... Made with thick, soft leads that will not break easily, the pencils create brightly colored lines that are perfect for school projects and creating detailed artwork.</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Crayola"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for poster colors
  case 'Poster':
    document.getElementById('displayimage').innerHTML += '<img src="/images/paint1.jpg" alt="postercolor" width="500" ><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Poster colour paints</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fivestar.png" alt="fivestar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$20.99</h3>'
    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">Poster color is a water-soluble paint consisting of a color mixed with a binder such as glue or gum to give it a dull finish. An example of poster color is tempera paint</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Poster"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for liquitex paint set
  case 'Liquitex':
    document.getElementById('displayimage').innerHTML += '<img src="/images/paint2.jpg" alt="Liquitex" width="500" ><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Liquitex basics paint set</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fourstar.jpg" alt="fourstar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$15.00</h3>'
    document.getElementById('displaytext').innerHTML += '<p style="font-size:15px;font-family:Tahoma;">Liquitex BASICS Acrylic Paint is developed for students and artists that need quality at outstanding value. Each color is uniquely formulated to bring out the maximum brilliance and clarity of the individual pigment. ... It contains permanent artist pigments and it retains peaks and brush strokes.</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Liquitex"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for Benicci paint brushes
  case 'Benicci':
    document.getElementById('displayimage').innerHTML += '<img src="/images/brush1.jpg" alt="brush1" width="500" ><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Benicci paint brush set</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src = "/images/fourstar.jpg" alt="fourstar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$15.00</h3>'
    document.getElementById('displaytext').innerHTML += '<p "font-size:15px;font-family:Tahoma;">The Benicci 15-piece paint brush set comes with a bonus paint knife, and a watercolor sponge. ... Suitable for acrylic, oil, watercolors, or even body paint, these brushes feature a sturdy, ergonomic wooden handle and strong ferrules to ensure no-shed bristles. Discover your full potential with the perfect tools in hand.</p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Benicci"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
  // create dynamic display for paint brush set
  case 'Paint1':
    document.getElementById('displayimage').innerHTML += '<img src="/images/probrush.jpg" alt="brush2" width="500"><br>'
    document.getElementById('displayimage').innerHTML += '<p style="font-size:20px;"><i>Paint brush set</i></p>'
    document.getElementById('displayimage').innerHTML += '<img src ="/images/fourstar.jpg" alt="fourstar"height="40">'
    document.getElementById('displayimage').innerHTML += '<h3 style="align-self:center;">$15.00</h3>'
    document.getElementById('displaytext').innerHTML += '<p>These brushes are used to apply paint smoothly and with texture. These resilient brushes are good as bristle brushes, allowing you to smoothly graze your paper with paint </p><br><br>'
    document.getElementById('displaytext').innerHTML += '<a href="/webpages/Addtocart.html?name=Paint1"><input type=button value="Add to cart" style="background-color:yellow;color:black;width:250px;height:35px;border-color:2px black;"></a>'
    break
}
// connect "search" button with "myResults" function
document.getElementById('search').addEventListener('click', myResults)
function myResults () {
  const research = document.getElementById('type').value
  // create switch cases for every possible search bar results
  switch (research) {
    // create cases for webpages to load as per user's search bar results
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

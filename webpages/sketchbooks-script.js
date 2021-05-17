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
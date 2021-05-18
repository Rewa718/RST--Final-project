//repeat switch case for user's search bar resuls to enable searches from all webpages.
//connect "search" button with "myResults" function
document.getElementById('search').addEventListener('click', myResults)

function myResults () {
  const research = document.getElementById('type').value
//create switch cases for every possible search bar results
  switch (research) {
    //create cases for webpages to load as per user's search bar results
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
//create case for home page to load if user searches randomly, and not according to program
    default:
      location.href = '/index.html'
  }
}

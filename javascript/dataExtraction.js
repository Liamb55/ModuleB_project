// selecting which tour is requested

function extractTourData(route) { 
  if (route == 1)
    {
      AddTourDetails(PORTOBELLO);
    }
    else if (route == 2)
    {
      AddTourDetails(RATHGAR);
    }
    else if (route == 3)
    {
      AddTourDetails(SANDYMOUNT);
    }
    else if (route == 4)
    {
      AddTourDetails(RATHMINES);
    }
    else if (route == 5)
    {
      AddTourDetails(HAROLD);
    } 
    else
    {
      // Throw Error
    };
  }
  // selects title from data.js for placeholder in HTML file
  function AddTitle(tour) {
    let title = document.getElementById('tour-title');
    title.innerText = tour.title;
  }
  // adds the tour route by street
  function AddTourDetails(tour) {
    AddTitle(tour);
    AddStreets(tour.routes);
  }
// displays route by street allowing for a half second delay beteen each street
async function AddStreets(routes) {
  let key_list = Object.keys(routes);

  for (let i = 0; i < key_list.length-1; i++) {
    let street_name = key_list[i];
    addStreet(street_name, routes[street_name]);
    await sleep(500);
  }
}
// includes checkbox for each street and provives for crossing out street when visited
function addStreet(name, description) {
  let tbody = document.getElementById('trails');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  let nameTd = document.createElement('td');
  nameTd.append(checkbox, name);
  let descriptionTd = document.createElement('td');
  descriptionTd.innerText = description;
  let routeTr = document.createElement('tr');
  routeTr.append(nameTd, descriptionTd);
  checkbox.addEventListener('change', () => {
    routeTr.classList.toggle('done');
  });

  tbody.appendChild(routeTr);
}

// enlarges map when mouse hovers over it.
var b=1;
function modifyImage() {
       if(b==1){
            document.getElementById("imagechange").width = "400" ;
            document.getElementById("imagechange").height="400";
           b=0;
          }
       else
          {
         document.getElementById("imagechange").width = "270";
         
         document.getElementById("imagechange").height = "270";
          b=1;
        }
   }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }
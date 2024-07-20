// provides for an array of available tour dates and maximum places(10) per the 5 routes

const TourDates = [];
TourDates[0] = ['2024-08-05', 10, 10, 10, 10, 10];
TourDates[1] = ['2024-08-07', 10, 10, 10, 10, 10];
TourDates[2] = ['2024-08-12', 10, 10, 10, 10, 10];
TourDates[3] = ['2024-08-14', 10, 10, 10, 10, 10];
TourDates[4] = ['2024-08-21', 10, 10, 10, 10, 10];
TourDates[5] = ['2024-08-23', 10, 10, 10, 10, 10];
TourDates[6] = ['2024-08-30', 10, 10, 10, 10, 10];

//  Allow for multiple tours// 
const PORTOBELLO = {
    title: 'Portobello 3.4km',
    routes: {
      'Portobello Harbour': 'The harbour was opened in 1801 becoming an important terminus for barges travelling along the Grand Canal',
      'Lennox Street': 'The Bretzel Bakery is one of the oldest artisan bakeries in Dublin',
      'Synge Street': 'George Bernard Shaw was born in Synge Street in 1856 at number 33.',
      'St. Kevins Church': 'Opened in 1872. Since 2007, it is the home to the Latin MAss.',
      'Stamer Street':'Named after Sir William Stamer, Lord Mayor of Dublin in 1809 and 1819.',
      'The Irish Jewish Meseum':'was opened by Chaim Herzog in 1985 during a state visit as President of Israel.',
      'The Two Presidents': 'Chaim Herzog, President of Israel(1983-1993) lived at no.33 and Cearbhall O Dalaigh at no. 15.',
      'Portobello Barracks':'(now called Cathal Brugha) was the National Army headquarters under Michael Collins.',
      'The Grand Canal':' was completed in 1804 and was a major means of transport before the railwqay.',
      'Robert Emmet Bridge ':'was build in 1790. It has a memorial to Emmet who was hanged on the 20 September 1803.',
      'Clanbrassil Street':' mentioned in ULYSSES as where Leopold Bloom was born.',
      'Emorville Avenue':' this street was laid out in 1860. The writer George William Russel lived at no.33.',
      'Carlisle Street':'was where the artist Louis le Brocquy had his studion.',
      'Heytesbury Street':'Author and journalist Cornelius Ryan was born in 33 Heytesbury Street.',
      'St. Kevins Park':'The Duke of Wellington was baptised in the church here and Thomas Moore the poet is buried here.',
    },}

    const RATHGAR = {
      title: 'Rathgar 9km',
      routes: {
        'Herzog Park': 'The park is named after Chaim Herzog, a former president of Israel who grew up in the area.',
        'The High School': 'boasts W.B.Yeats as a former pupil. Danum on Zion road was the home to the BEwley family',
        'Orwell Road': 'Writer John Millington Synge once lived at no. 4 orwell park as did Bram Stoker.',
        'Orwell Park': 'The dodder river was diverted here through a millrace and provided energy to the Corn Mill and Printing Mill in the late 1700s.',
        'Dartry Park':'This takes you along the Dodder river which is abundant with wildlife.',
        'Dartry House':'was once the home of businessman William Martin Murphy noted for his role in the 1913 lockout.',
        'Palmerstown Park': 'The park was laid out in 1894 by William Shepherd who also laid out Harolds Cross park.',
        'Highfield Road':'The area around St. Lukes Hospital was owned in medieval times by the Prior of St. MaryDe Hogges until the 1530s.',
        'Christchurch':'was designed by Andrew Heiton from Perth in Scotland and built by Gilbert Cockburn who also built the NAtional Gallery.',
        'Rathgar Road ':'The first terrace of houses to be completed here was Spire View no 31/34 in 1834.',
        'Church of the Three Patrons':' is dedicated to the three patron saints of Ireland, St Patrick,St. Bridget and St. Colmcille.',
        'Kenilworth Square':' was built in 1860. Eamon De Valera President of the first Dail moved his offices here in 1921.',
        'Brighton Square':' was built in 1862 and is not square but rather triangular. James Joyce was born here in 1882 at no.41.',
        'Rathgar Avenue':'Poet George Russell,who wrote under the pseudonym AE live at N. 17,',
        'Rathgar Village':'remains one of Dunlins distinctive old villages where you can enjoy food and shopping.',
      },}
      const SANDYMOUNT = {
        title: 'Sandymount 5.6km',
        routes: {
          'Sandymount Green': 'is a defining element of Sandymount and is surrounded ny buildings including Sandymount Castle',
          'Aviva Stadium': 'is the home of irish rugby union. There has been a stadium here since 1872 when Landsdowne Football was founded',
          'Newbridge Avenue': 'James Joyces Ulysses has a description of Paddy Dignams funeral departing from no.9 Newbridge Avenue.',
          'Scallet Hill': 'is a fine example of a post-glacial raised beech.  .',
          'Star of the Sea Church':'was built in 1853 by JJ McCarthy. This area is mentioned in the Nausicaa episode of Ulyssesset in 1904.',
          'Sandymount Strand':'was reclaimed by Dublin Corporation between 1940 and 1980its a prime area for wintering wading birds like Brent geese.',
          'Christ Church': 'was built in 1864 by architect Alfred G Jones in a simple Gothic REvival Design with a decorative rose window in thr west facade.',
          'Roslyn Park':' is a beautiful 18th centuary villa designed by architect James Gandon for his friend landscape painter William Ashford.',
          'Lord Merrions Sea Wall':' In the 17th centuary, Lord Merrionestablished a brick works here for many of the fine georgian squares in Dublin.',
          'An Cailin Ban':' The sculpture An Cailin Ban was inveiled here in 2002 by the mexican president Vincente Fox.',
          'Tram Yard':' Horse drawn trams were introduced in 1872 by the Tramway Company whose stables and yards were build along Gilford Road.',
          'Sandymount Promenade':'stretchs along for 1 km is a popular walking stop and provide spectular views over the area.',
          'Martello Tower':'was built in 1805a part of a defence system to protect against a NApoleonic invasion.',
          'St. Johns Church.':' was built in 1850 and is a replica of a 13th centuary church in Normandy ',
          'Park Avenue.':' is home to the Pembroke Criket Club and the Monkstown Rugby Club. ',
          
        },}
        const RATHMINES = {
          title: 'Rathmines 6.8km', 
          routes: {
            'Portobello Harbour': 'The harbour was opened in 1801 becoming an important terminus for barges travelling along the Grand Canal.',
            'St.Marys College': 'opened in 1890 by the Holy Ghost Fathers, originally called "Larkhill".',
            'Cathal Brugha Barracks': 'opened in 1815, originally called Portobello Barracks.It was renamed in 1952.',
            'Rathmines Library': 'was built in 1913 with a grant from Andrew Carnegie.it includes a William Morris stained glass window',
            'Leinster Road':'dates from 1840. Countess Markiewicz lived at no.49.',
            'St. Louis Convent':'founded by the Sisters of St. Louis in 1913. Originally the home of Lord Gray, Lord Lieutenant.',
            'The Chains': 'used to be the home of a number of thatched cotteges fenced off from the rive Swan by a chain. .',
            'Upper Rathmines Road':'The site of Wynnes Castle built in 1820 is currently a Church of Ireland Training College.',
            'Trinity Hall':' is owned by Trinity College and it is used for research and plant conservation.',
            'Palmerston Park ':'the cresent shaped park was designed by William Sheppard in 1892 and retains many of its victorian features.',
            'Palmerston Road':' was named after Henry Jihn Temple 3rd Viscount Palmerston who twice served as British Prime Minister.',
            'Belgrave Square':' dates largely from the 1860s but was bought by Dublin Corporation in the 1970s.',
            'Rathmines Town Hall':'designed by irish architect Sir Thomas Drew and was completed in 1896.',
            'Observatory Lane':'in the 1860s the Grub Telescope was housed here.It produced then the largest refracting telescope for Vienna.',
            'Church of Mary Immaculate':'was completed in 1856with a magnificant portico added in 1878. However a fire in 1920 destroyed it.',
          },}
          
          const HAROLD = {
            title: 'Harolds Cross 4.2km',
            routes: {
              'Robert Emmet Bridge': 'built in 1790 abd rebuilt in 1936 and renamed after Robert Emmet who was executed in 1803.',
              'Gleenmount Mill': 'was established in the 19th centuary by the famous Quaker Pim family and powered by a water wheel.',
              'Our Ladys Hospice': 'founded by Sr Mary Aikenhead who bought what was the former Pim family home.',
              'Sisters of St. Clare': 'the sisters extablished an orphanage here in 1804, which operated until 1981.',
              'Greyhound Stadium':'From 1929 until 1994 the ground was used by St Patricks Athletic anf Shelbourne.',
              'Quaker House':'a community of quakers lived here in the 19th centuary and extablished cotton and flour mills here.',
              'Our Lady of the Rosary': 'built in 1938 on the lands of Mount HArold House.',
              'Mount Argus Park':'built in the 1990s and is home to a variety of wild life.',
              'Stone Boat':' the river Poddle here was essential for powering the nearby mills and is divided by a stone structure.',
              'Mount Argus Church ':'the Passionist order built  a monastery here in 1878. Padraig Pearses father James was a stonemason on the project.',
              'Site of the Gallows':' HArolds Cross was an execution ground from medieval times until the 18th century.',
              'Russion Orthodox  Church':' constructed in 1838 and is the Russion Orthodox Church since 2003.',
              'Mount Jerome Cemetery':'which is mentioned in Ulysses opened in 1836. Many famous people are buried here such as Jack Butler Yeats.',
              'Former Barracks':'used to be a yeomanry barracks but is now a national school.',
              'Harolds Cross Park':'used to be used as commonage. It was a meeting place by the United Irishment, including Robert Emmet.',
            },}



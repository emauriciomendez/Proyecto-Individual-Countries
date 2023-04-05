const {Country, Activity}=require('../db.js');
const axios=require('axios')

const getCountriesApi= async()=>{
  //  console.log('en controleler country')
    const countriesAll= await axios.get('https://restcountries.com/v3/all');
   //  console.log(countriesAll.data.length, 'longitud')
    let allContriesApi=[];

     for(let i=0;i<countriesAll.data.length;i++){
        let country=countriesAll.data[i]
        const capital= Array.isArray(country.capital)? country.capital[0]:country.capital
        let c= { 
                id:country.cca3,
                name: country.name.common,
                capital,
                region:country.region,
                subregion:country.subregion,
                area:country.area,
                population: country.population,
                flags: country.flags[0],
                }
        await Country.create(c)
        allContriesApi.push(c);
     }
    
// console.log(allContriesApi);
    return allContriesApi;
}
const getCountries= async()=>{
    const countriesAllBd= await Country.findAll({       
        include: Activity,      
         order: [['name', 'ASC']],
    })
    
    return countriesAllBd
}
const getCountryForName= async(name)=>{
    const countryForName= await Country.findAll({
        where:{name},
        include: Activity
    })
  //  console.log(countryForName)
    return countryForName
}
const getCountryForId=async(id)=>{
    const countryForId= await Country.findAll({
        where:{id},
        include: Activity
    })
    return countryForId
}

module.exports={getCountries, getCountryForName,getCountryForId, getCountriesApi}
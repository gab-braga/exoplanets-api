# Exoplanets API

## Technologies
* Node.js
* Prisma
* MySQL

## Details
The Exoplanet API is a robust and efficient Node.js-based web service designed to provide comprehensive information
about exoplanets. This API allows astronomers, researchers, and enthusiasts to access a wealth of data about
exoplanets beyond our solar system.

_This informations was produced by the NASA Exoplanet Archive http://exoplanetarchive.ipac.caltech.edu Thu Oct 12 11:06:27 2023_

- pl_name: Planet Name
- sy_snum: Number of Stars
- sy_mnum: Number of Moons
- discoverymethod: Discovery Method
- disc_year: Discovery Year
- disc_pubdate: Discovery Publication Date
- disc_locale: Discovery Locale
- pl_orbper: Orbital Period (days)
- st_age: Stellar Age (Gyr)
- sy_dist: Distance (pc)

## Endpoints

- `GET: /exoplanets?limit={limit}`
  Search a list of exoplanet data in default order.
- `GET: /exoplanets/search/{pl_name}?limit={limit}`
  Search the list of exoplanet data by name filter.
- `GET: /exoplanets/{id}`
  Search exoplanet data by ID.

## Get Started

1. `git clone https://github.com/F-Gabriel-Braga/exoplanets-api.git`
2. `cd exoplanets-api`
3. `npm install`
4. `npm start`

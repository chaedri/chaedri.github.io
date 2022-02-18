## [grass.jupyter Development](https://trac.osgeo.org/grass/wiki/GSoC/2021/JupyterAndGRASS/MiniGrant2022)
I'm working with Vaclav Petras and Helena Mitasova to continue developing `grass.jupyter`, a subpackage for GRASS GIS that provides visualization functions for view GRASS data in Jupyter Notebooks. The project began with Google Summer of Code 2021 and continues with a GRASS Mini Project Grant during January-March 2022. 

[See GRASS GIS and grass.jupyter on GitHub](https://github.com/OSGeo/grass/tree/main/python/grass/jupyter)

[View example notebook for basic grass.jupyter usage](notebooks/InteractiveMap.md)

[View example notebook for space time dataset visualizations](notebooks/InteractiveMap.md)

[View example notebook for interactive GRASS maps](notebooks/InteractiveMap.md)

## [Google Summer of Code 2021](https://trac.osgeo.org/grass/wiki/GSoC/2021/JupyterAndGRASS)
I continued working on GRASS GIS through Google Summer of Code 2021. My project focused on improving the interation of GRASS GIS and Jupyter Notebooks. I created a new subpackage for GRASS GIS called `grass.jupyter` that includes functions for simplifying the launch of GRASS GIS in Jupyter Notebooks and two different classes that help users display GRASS data in Jupyter Notebooks. One of them, `InteractiveMaps`, allows users to easily create interactive maps with [`folium`](https://python-visualization.github.io/folium/index.html), a leaflet library for Python. I learned a lot about Python and GRASS coding conventions!

[Try GSoC version of grass.jupyter in Binder](https://mybinder.org/v2/gh/OSGeo/grass/c173461?urlpath=lab%2Ftree%2Fdoc%2Fnotebooks%2Fgrass_jupyter.ipynb)

#### Watch FOSS4G talk on grass.jupyter

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jjgghz_EzWQ?start=5005" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## GRASS GIS Development
I recently wrote my first GRASS GIS add-on module, call r.centroids! Given a map(raster) with clumps of same-valued pixels such as a watershed map, r.centroids will return the center point of each area. This isn't a novel GRASS GIS capability; a centroid function is nested in the r.volume module but, it's inconvenient (not to mention a little counterintuitive) to find and use r.volume for centroids. So, a created a wrapper module for r.volume that just returns the centroids. It might be simple but it's an exciting first Open-Source software contribution! Check out the man pages [here](https://grass.osgeo.org/grass78/manuals/addons/r.centroids.html).

## Applications of Tangible Landscape in Geomorphology and Hydrology
Tangible Landscape is an tangible graphical interface that couples a physical model with a digital model of a landscape so users can feel, interact and reshape the landscape (http://tangible-landscape.github.io/). My research over the next several years will focus on developing hydrologic and geomorphic tools and models in Tangible Landscape that will help stakeholder better understand the impacts of climate change and the results of different mitigation techniques.

## Spatial Variability of Radiofrequency Noise in the VHF and UHF in Urban Environments
While at the Cold Regions Research and Engineering Laboratory (CRREL) in Hanover, NH, I worked with Dr. Daniel J. Breton to develop a system for mapping radiofrequency noise in urban environments. Radiofrequency noise consists of unintentionally-emitted, incoherent electromagnetic waves. This noise comes from many different sources, some natural (such as the sun and lightning) and others man-made (LED bulbs, electronic devices, damaged or poorly insulated electral wires to name a few). When the noise is powerful enough, it can interfere with sensitive electromagnetic devices and radio communications. Previously, most radiofrequency noise measurements were made with stationary setups such as a large van that could be driven to a neighborhood and parked to take measurements over the course of a day. Dr. Breton and I developed a novel, backpack-based system that can be walked through the urban environment where radiofrequency noise is often most powerful. The system successfully showed there is significant variability in noise power on the scale of several blocks. For more about this project, check out my publications page or [this AGU blogpost](https://blogs.agu.org/geospace/2019/10/23/radio-noise-maps-show-where-emergency-communications-could-get-tricky/) on our measurement campaigns in Boston, MA.

![pic](https://chaedri.github.io/images/RFNoise_boston.jpg)

## Channel Sounding in the Ultrahigh Frequency in Mountainous and Urban Environments
At CRREL's Radio Science group, we also study the bistatic scattering properties of buildings and mountains to better understand the influence of the environment on the the radio channel (the many paths the signal travels between the transmitter and reciever). We developed a channel sounding system that could characterize the channel at frequencies commonly used for radio communication in the ultrahigh frequencies. A channel sounder consists of two stations - a reciever and a transmitter - that are deployed to a particular environment of interest. The transmitter sends a known pseudorandom noise sequence out into the environment. The reciever cross-correlates the recieved signal with the original pseudorandom noise sequence to see how the channel has distorted the signal. For more information, check out my publications page.
![pic](https://chaedri.github.io/images/channelsounding.JPG)
import React from 'react'

export const Services = (props) => {
    return (
        <div className="container">
            <h2> These are the services offered by me</h2>
            <p>As I am a beginner freelancer I won't charge much. </p>
            <h2>Website</h2>
            <div className="service">
            {
                props.myservices.webdev.map((service) => {
                    return (<>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service}</h5>
                                <button className="btn btn-sm calltoact"> Know More </button>
                            </div>
                        </div>

                    </>)
                })
            }
            </div>
<h2> Graphic Designing</h2>

<div className="service">

{

props.myservices.graphic.slice(0,4).map((service) => {
    return (<>
        <div className="card">
            <img src= {service[0]} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{service[1]}</h5>
                <button className="btn btn-sm calltoact"> Know More </button>
            </div>
        </div>

    </>)
})
}
</div>

<h2> UI / UX </h2>

<div className="service">
{

props.myservices.uiux.map((service) => {
    return (<>
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{service}</h5>
                <button className="btn btn-sm calltoact"> Know More </button>
            </div>
        </div>

    </>)
})
}
</div>

        </div>

    )
}

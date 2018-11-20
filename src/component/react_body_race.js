
import React from 'react';

class Race extends React.Component{
    render() {
        return (
            <div>
                <div className='container'>
                    <img src='/static/images/race_bg.png' alt='head' className='img-fluid d-block w-100'/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 sidenav'>
                        </div>
                        <div className='col-sm-8' style={{paddingBottom: '50px'}}>
                            <div className='col-sm bg-danger'>
                                <p>EVENT NAME</p>
                                <p>EVENT DATE</p>
                                <button>REGISTRATION ACTION</button>
                            </div>
                            <div className='col-sm'>
                                <p className='text-center'>LATEST RACE</p>
                            </div>
                            <div className='col-sm text-center'>
                                <button type="button" className="btn btn-outline-primary">CHARITY</button>
                                <button type="button" className="btn btn-outline-primary">EVENT</button>
                                <button type="button" className="btn btn-outline-primary">ALL</button>
                            </div>
                            <div className='col-sm text-center'>
                                <div className="card" style={{width:'auto'}}>
                                    <img className="card-img-top" alt='alt-body-top' src="/static/images/race_bg.png" style={{width:'100%'}}/>
                                        <div className="card-body">
                                            <h4 className="card-title">EVENT NAME</h4>
                                            <p className="card-text">EVENT DATE</p>
                                            <p className="card-text">EVENT PRICE</p>
                                            <button type="button" className="btn btn-outline-primary">ACTION</button>
                                        </div>
                                </div>
                                <div class="card" style={{width:'auto'}}>
                                    <img class="card-img-top" alt='img-body-top' src="/static/images/race_bg.png" style={{width:'100%'}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">EVENT NAME</h4>
                                            <p class="card-text">EVENT DATE</p>
                                            <p class="card-text">EVENT PRICE</p>
                                            <button type="button" class="btn btn-outline-primary">ACTION</button>
                                        </div>
                                </div>
                            </div>
                            <div className='col-sm text-center'>
                                <button type="button" class="btn btn-outline-primary">See All</button>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Race;
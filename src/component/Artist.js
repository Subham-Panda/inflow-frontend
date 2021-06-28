import React, { Component } from "react";
import './component.css';
import { assetsImages } from "../constants/images";
import artistbg from "../assets/images/artist-background.jpg";
import Customdropdown from "./Customdropdown";
import Performbar from "./Performbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Totalbalancechart from "./Totalbalancechart";
import Song from "./Song";
import Mynftdropdown from "./Mynftdropdown";
import {Modal} from "react-bootstrap";

class Artistpic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileModel: false
        }
    }

    render(){
        return(
            <div className="artist-background">
                <div className="artist-main">
                    <div className="background">
                        <img src={assetsImages.artistbg} />
                        <button className='edit-profile' type='button' onClick={() => this.setState({profileModel: !this.state.profileModel})}>
                            EDIT PROFILE
                        </button>
                    </div>
                    <div className="artist-details">
                        <div className="artist-main-details">
                            <div className="artis-img mb-0">
                                <img src={assetsImages.artist} />
                            </div>
                            <div className="artist-content">
                                <div className="artist-content-details">
                                    <div className="artist-name">
                                        Mike Posner
                                    </div>
                                    <div className="album-name">
                                        Hip-Hop/Rap
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="song-total">
                                                125,987
                                            </div>
                                            <div className="song-folder">
                                                Superfans
                                            </div>
                                        </li>
                                        <li>
                                            <div className="song-total">
                                                78
                                            </div>
                                            <div className="song-folder">
                                                NFTs
                                            </div>
                                        </li>
                                        <li>
                                            <div className="song-total">
                                                $78.5
                                            </div>
                                            <div className="song-folder">
                                                Token Price
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="follow-btn">
                                    <button>FOLLOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="artist-tag">
                            <button className="tag-button">
                                MERCH STORE
                            </button>
                            <button className="tag-button">
                                LIVE STREAMS
                            </button>
                            <button className="tag-button">
                                CONTENT
                            </button>
                            <button className="tag-button">
                                EXPERIENCE
                            </button>
                            <button className="tag-button">
                                VR ROOM
                            </button>
                        </div>
                    </div>
                </div>
                <div className="dashboard-wrapper-main artist-main-wrapper">

                    {/* ---------------Total-wallet-balance-------- */}
                    <div className="Second-row-wave-chart">
                        <div className="total-balance-row">
                            <div className="heading-cols">
                                <div className="card-heading">Drake Coin Price</div>
                                <div className="dollor-price"><span>$</span> 78.55</div>
                                <div className="small-heading">+7.3% last week</div>
                            </div>
                            <div className="btn-filter">
                                <a href="#">
                                    <img src={assetsImages.filter}/>
                                </a>
                            </div>

                        </div>
                        <div className="total-bal-chart">
                            <Totalbalancechart />
                        </div>

                        <div className='song-buy-sell'>
                            <div className='song-button'>
                                <img src={assetsImages.button}/>
                                <div className='button'>
                                    <button className='btn sell-button' type='button' onClick={() => this.setState({sell: !this.state.sell})}>
                                        Sell
                                    </button>
                                    <button className='btn buy-button'>
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='poll-play-song-details'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='poll-details'>
                                    <ul className='poll-tab'>
                                        <li className='active'>
                                            <a href='#'>
                                                Poll#1
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Poll#2
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                Poll#2
                                            </a>
                                        </li>
                                    </ul>

                                    <div className='poll-content'>
                                        <div className='poll-title'>
                                            Where should the next concert be held?
                                        </div>
                                        <div className='poll-vote-list'>
                                            <div className='list-title'>
                                                <span>Answer</span>
                                                <span>Votes</span>
                                            </div>
                                            <div className='poll-vot-count'>
                                                <div className='vote-details'>
                                                    <span className='poll-name'>
                                                        Chicago, IL
                                                    </span>
                                                    <span className='poll-number'>
                                                        137,082
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='poll-vot-count'>
                                                <div className='vote-details'>
                                                    <span className='poll-name'>
                                                        Chicago, IL
                                                    </span>
                                                    <span className='poll-number'>
                                                        137,082
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='poll-vot-count'>
                                                <div className='vote-details'>
                                                    <span className='poll-name'>
                                                        Chicago, IL
                                                    </span>
                                                    <span className='poll-number'>
                                                        137,082
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='poll-vot-count'>
                                                <div className='vote-details'>
                                                    <span className='poll-name'>
                                                        Chicago, IL
                                                    </span>
                                                    <span className='poll-number'>
                                                        137,082
                                                    </span>
                                                </div>
                                            </div>
                                            <button className='vote-btn'>
                                                Cast Your Vote
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='song-play-list'>
                                    <div className='playlist-header'>
                                        <span className='like'>
                                            <img src={assetsImages.like}/>
                                            557
                                        </span>
                                        <button className='limited-song-btn'>
                                            <img src={assetsImages.verifed}/>
                                            Limited
                                        </button>
                                    </div>

                                    <div className='playlist-details'>
                                        <div className='playlist-price'>
                                            <span>$</span>37.99
                                        </div>
                                        <div className='img-wrapper'>
                                            <img src={assetsImages.poster}/>
                                        </div>
                                            <div className='playlist-title'>
                                            Nothing Was The Same
                                        </div>
                                        <div className='album-title'>
                                            Drake: Album NFT
                                        </div>

                                        <div className='playlist-start'>
                                            <span>Tier:</span>
                                            <ul>
                                                <li>
                                                    <img src={assetsImages.star}/>
                                                </li>
                                                <li>
                                                    <img src={assetsImages.star}/>
                                                </li>
                                                <li>
                                                    <img src={assetsImages.star}/>
                                                </li>
                                                <li>
                                                    <img src={assetsImages.star}/>
                                                </li>
                                                <li>
                                                    <img src={assetsImages.starwhite}/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='playlist-time'>
                                            Auction Ends: 7 hrs 38 mins
                                        </div>

                                        <div className='playlist-card-footer'>
                                            <div className='prev-button'>
                                                <button className='btn prev-icon'>
                                                    <img src={assetsImages.prev}/>
                                                </button>
                                            </div>
                                            <div className='center-button'>
                                                <div className='bid-button'>
                                                    <button className='bid-icon btn'>
                                                        Bid
                                                    </button>
                                                </div>
                                                <div className='bid-amount d-none'>
                                                    <input className='form-control' type='text' placeholder='Enter bid amount'/>
                                                    <div className='next-icon'>
                                                        <img src={assetsImages.next}/>
                                                    </div>
                                                </div>
                                                <div className='bid-text d-none'>
                                                    You are the high bidder!
                                                </div>
                                            </div>
                                            <div className='next-button'>
                                                <button className='next-icon btn'>
                                                    <img src={assetsImages.next}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* -----------My-NFTs----------------------- */}

                    <div className="mynfts-row-main">
                        <div className="second-col">
                            <Mynftdropdown />
                        </div>
                        <div className="center-col">
                            <input placeholder="Search for an NFT..." />
                        </div>
                        <div className="last-icon">
                            <a href="#">
                                <img src={assetsImages.filter} />
                            </a>
                        </div>
                    </div>

                    <div className="songs-grid-main">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                    </div>
                </div>

                <Modal show={this.state.profileModel} className="edit-profile-modal" onHide={() => this.setState({profileModel: !this.state.profileModel})}>
                    <Modal.Header closeButton>
                        <span className='title'>
                            Edit Profile
                        </span>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='form-group'>
                            <label>Name</label>
                            <input className='form-control' type='text' placeholder=''/>
                        </div>

                        <div className='user-profile'>
                            <img src={assetsImages.artist} />
                            <button className='upload-profile btn-gradiant' >
                                Upload New Profile Picture
                            </button>
                        </div>

                        <div className='user-profile-background'>
                            <img src={assetsImages.artistbg} />
                            <button className='upload-profile-background btn-gradiant'>
                                Upload New Background Picture
                            </button>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className='save-btn btn-gradiant'>
                            Save Edits
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.sell} className="edit-profile-modal sell" onHide={() => this.setState({sell: !this.state.sell})}>
                    <Modal.Header closeButton>
                        <span className='title'>
                            Sell Drake Token
                        </span>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='form-group'>
                            <label>Number of Tokens</label>
                            <input className='form-control' type='text' placeholder=''/>
                        </div>

                        <div className='form-group'>
                            <label>Price</label>
                            <input className='form-control' type='text' placeholder=''/>
                        </div>

                        <div className='sell-total-amount'>
                            Amount you'll earn: $36.55
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className='save-btn btn-gradiant'>
                            sell
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default Artistpic

import React from 'react'
import '../../style/new.css'
import { 
    Container,
    Row,
    Col,
 } from 'reactstrap'
import imageData from '../../data/imageData'
import {
    MdAccountCircle,
    MdDateRange,
} from 'react-icons/md'
import {AiOutlineCaretRight} from 'react-icons/ai'


const New = () => {
  return (
    <section className='news' id='news'>
        <Container>
            <Row>
                <Col>
                    <h2 className='section-title2 section-bg'>
                        Latest News & <span className='span'>Articles</span>
                    </h2>
                    <p className='section-subtext-news'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse debitis aperiam illum fuga itaque pariatur architecto inventore placeat minus provident laudantium natus eius, nulla doloremque, magni fugit cupiditate maxime.
                    </p>

                    <ul className='news-list'>

                    <li>
                            <div className='news-card'>
                                <div className='card-banner'>
                                    <img src={imageData.NewsImage05} alt='' className='img-cover' style={{width: 390, height: 290}} />
                                </div>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>December 25, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                    MERRY CHRISTMAS & HAPPY NEWYEAR 
                                    </h3>

                                    <p className='card-text'>
                                    Selamat Natal dan Tahun Baru!. Semoga akhir tahun ini dipenuhi dengan kesehatan, kebahagiaan, dan kedamaian. Selamat liburan juga, saatnya lupakan penat, dan nikmati hiburan akhir tahun.
                                    </p>
                                    <a href='https://www.youtube.com/post/UgkxVYvhzwx8X5z1FHzpyC1WMtp7zcy3DMXD' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className='news-card'>
                                <div className='card-banner'>
                                    <img src={imageData.NewsImage04} alt='' className='img-cover' style={{width: 390, height: 290}} />
                                </div>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>December 23, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                    Set Treant Baru Mirip DeadWoon Hon
                                    </h3>

                                    <p className='card-text'>
                                    Bundle Collector's Cache 2022 bagian kedua udah rilis lho gaes. Dari belasan set, mata mimin langsung fokus ke set Treant yang cukup mirip dengan Deadwood di Heroes of Newerth.
                                    </p>
                                    <a href='https://www.youtube.com/channel/UCvCloNPASmV_DGmgiE5gmVw/community?lb=UgkxsXqsv21XYcx6oiq_KYOdQ3k1ieeTy4NN' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
                                </div>
                            </div>
                        </li>



                         <li>
                            <div className='news-card'>
                                <div className='card-banner'>
                                    <img src={imageData.NewsImage03} alt='' className='img-cover' style={{width: 390, height: 290}} />
                                </div>

                                <div className='news-card-content'>
                                    <ul className='card-meta-list'>
                                        <li className='card-meta-item'>
                                            <MdAccountCircle />
                                            <a href='' className='item-text'>Admin</a>
                                        </li>

                                        <li className='card-meta-item'>
                                            <MdDateRange />
                                            <time dateTime='2022-11-27' className='item-text'>November 14, 2022</time>
                                        </li>
                                    </ul>

                                    <h3 className='card-title'>
                                        Team M11 MLBB Ladies
                                    </h3>

                                    <p className='card-text'>
                                    Bersiaplah MLBB Ladies kita akan segera bertarung di Land of Dawn. Sudah sampai babak Pays-in, selanjutnya tanding mulai 15 Desember, match pertama sekitar pukul 16:40 WITA.
                                    </p>
                                    <a href='https://www.youtube.com/channel/UCvCloNPASmV_DGmgiE5gmVw/community?lb=UgkxfBcBAiWUIDyNNz2Pa1J7AtfbNY1v2oWj' className='card-link'>
                                        <span className='span'>Read More</span>
                                        <AiOutlineCaretRight />
                                    </a>
                                </div>
                            </div>
                        </li>

                        
                        

                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default New
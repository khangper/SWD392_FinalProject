import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ".//PaidMembership.css";
import check from '..//../assets/check.png';
import Closepaidment from '..//../assets/Close-paidment.png';
import plus from '..//../assets/pluse.png';


export default function PaidMembership() {
  return (
    <div >
        <Header />
<main>
              <div class="_215b15">
    
        <div class="row">
            <div class="title125">
                <div class="titleleft">
                    <div class="ttl121">
                        <nav aria-label="breadcrumb">
                            <div class="breadcrumb">
                                <Link href="index.html" class="breadcrumb-item">Home</Link>
                                <Link class="breadcrumb-item active" aria-current="page">/Paid Membership</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="Paidmember-title" >
                <h2>Paid Membership</h2>
            </div>

        </div>

              </div>


              <div class="memb4d25">
			<div class="PMMS-container">			
	

          <div class="membership-container">
  <div class="membership-card">
    <div class="membership-title">
      <div>
        <h2>Baby Plan</h2>
        <div class="membership-price">$49/month</div>
        <div class="save-price">Save $79 when paid annually</div>
      </div>
      <img className="Member-icon" src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-1.svg" alt=""/>
    </div>
    <div class="membership-des">
      <p>For instructors launching their first digital products.</p>
    </div>
    <div class="accordion">
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Your own shop</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
       
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Online courses</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Email marketing</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Messaging</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Zero charges comissions 10 sales</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />7-days-a-week support</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
      <details class="panel-default-1">
        <summary><img src={Closepaidment} alt='' className="Check-iocn"  />Memberships</summary>
      </details>
      <details class="panel-default-1">
        <summary><img src={Closepaidment} alt='' className="Check-iocn"  />Blog</summary>
      </details>
      <details class="panel-default-1">
        <summary><img src={Closepaidment} alt='' className="Check-iocn"  />Affiliate marketings</summary>
      </details>
      <details class="panel-default-1">
        <summary><img src={Closepaidment} alt='' className="Check-iocn"  />Third-party code</summary>
      </details>
    </div>
    <button class="prmb_btn">Purchase Membership</button>
  </div>
  <div class="membership-card">
    <div class="membership-title">
      <div>
        <h2>Business Plan</h2>
        <div class="membership-price">$99/month</div>
        <div class="save-price">Save $189 when paid annually</div>
      </div>
      <img className="Member-icon" src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-2.svg" alt=""/>
    </div>
    <div class="membership-des">
      <p>For instructors who are ready to grow their business.</p>
    </div>
    <div class="accordion">
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Your own Shop</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Online courses</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Email marketing</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Messaging</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Zero charges comissions 30 sales</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />7-days-a-week support</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Memberships</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Blog</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Affiliate marketings</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
      <details>
        <summary><img src={check} alt='' className="Check-iocn"  />Third-party code</summary>
        <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
      </details>
    </div>
    <button class="prmb_btn">Purchase Membership</button>
  </div>
          </div>



   
	



<div class="Paidmember1-grid-container">
    <div class="title-section">
        <h2>Membership FAQ</h2>
        <p>Wait, what about…</p>
    </div>
    <div class="faq-section">
        <details class="faq-item">
            <summary>Is it easy to change plans?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS.
            </div>
        </details>
        <details class="faq-item">
            <summary>Can I cancel at any time?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>Are there any credit card or PayPal fees?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>Do I have to choose my plan before I start my trial?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>Edututs+ isn’t for me. Can I have a refund?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>How do I get my money?	</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>Do I need a credit card to sign up?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>Is Edututs+ safe and secure for online transactions?</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>

        <details class="faq-item">
            <summary>I still have questions. HELP!</summary>
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            </div>
        </details>


       
    </div>
</div>
			</div>
		</div>

    
</main>
        





        <Footer/>
    </div>
  )
}
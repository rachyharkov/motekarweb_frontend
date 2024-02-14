import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import BigHeadline from "../home/partial-section/BigHeadline";

export default function Contact() {
  return (
    <>
      <div>
        <HeaderSection
          title="Contact Us"
          imageBackground="images/close-up-businessman-using-modern-device-workplace.jpg"
        />
        <Divider />
        <section className="section-vh-auto general">
          <div className="container-fluid general-inner section-inner h-100">
            <div className="row"> 
              <div className="col-7">
                  <h4 className="text-white bold-title mb-0" style={{'color': 'var(--color-accent)'}}><span style={{'color': 'var(--color-secondary)'}}>GET</span> IN TOUCH
                  </h4>
                  <h4 className="text-white bold-title" style={{'color': 'var(--color-accent)'}}>LET'S WORK <span style={{'color': 'var(--color-secondary)'}}>TOGETHER</span></h4>
                  <table className="text-accent my-5">
                    <tbody>
                      <tr>
                        <td className="vertical-align-top">
                          <i className="fas fa-map-marker-alt me-2"></i>
                        </td>
                        <td>
                          Jl. Buah Batu No. 161 Kelurahan Turangga Kecamatan Lengkong Bandung Post Code 40264 - West Java Indonesia
                        </td>
                      </tr>
                      <tr>
                        <td className="vertical-align-top">
                          <i className="fas fa-phone-alt me-2"></i>
                        </td>
                        <td>
                          Phone: +62 8190 6882 550
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5960117262866!2d107.62258707587614!3d-6.9387902679261755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e94d8ac57371%3A0x697fb701466289fd!2sMotekar%20Studio%20(PT.%20Motekar%20Digital%20Kreasi)!5e0!3m2!1sen!2sid!4v1707891694480!5m2!1sen!2sid" width="600" height="450" style={{'border': 0 , 'borderRadius' : '15px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-5">
                <h4 className="text-white bold-title mb-3" style={{'color': 'var(--color-accent)'}}><span style={{'color': 'var(--color-secondary)'}}>SEND</span> US A MESSAGE
                </h4>
                <form action="#" method="POST">
                  <div className="form-group mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required/>
                  </div>
                  <div className="form-group mb-3">
                    <textarea name="message" className="form-control" placeholder="Your Message" required rows={5}></textarea>
                  </div>
                  <div className="alert alert-warning" role="alert">
                    We are developing this feature, please contact us via email or phone if you have any inquiries.
                  </div>
                  <button type="submit" className="btn btn-primary disabled" disabled>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <BigHeadline/>
      </div>
    </>
  )
}
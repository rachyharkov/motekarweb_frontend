import './BiodataMember.Module.css'

export default function BiodataMember({ data }) {
  return(
    <div className="container biodata-member">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 photo-wrapper">
          <img src={'images/' + data.image} alt={data.nama} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <h4 className="text-white bold-title m-0">{data.nama}</h4>
          <p className='jabatan-text m-0' style={{'color': '#979797'}}>{data.jabatan}</p>
          <p className="text-white description-text">{data.text}</p>
        </div>
      </div>
    </div>
  )
}
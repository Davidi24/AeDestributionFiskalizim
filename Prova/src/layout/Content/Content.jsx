import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = ({selectedVatNumber}) => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain  selectedVatNumber={selectedVatNumber} />
    </div>
  )
}

export default Content

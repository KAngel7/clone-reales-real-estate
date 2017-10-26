import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslation } from 'Services/Geo';

const mapStateToProps = (state: any) => ({
  lang: state.status.lang,
  isPersist: state.status.isPersist
});

interface CaptionProps {
  lang: 'en' | 'vn';
  isPersist: boolean;
}

class Caption extends React.Component<CaptionProps, {}> {
  render() {
    if (!this.props.isPersist) {
      return (null);
    }
    return (
      <div className="homeCaption">
        <div className="homeTitle">{getTranslation(this.props.lang, 'Now it\'s easy to find your future home')}</div>
        <div className="homeSubtitle">{getTranslation(this.props.lang, 'With Reales - Real Estate HTML Template')}</div>
        <Link className="btn btn-black" to="/search">{getTranslation(this.props.lang, 'Learn More')}</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Caption);
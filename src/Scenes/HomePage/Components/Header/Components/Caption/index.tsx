import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslation, SupportedLanguage } from 'Services/Geo';
import { RootState } from 'Redux/Store';

const mapStateToProps = (state: RootState) => ({
  lang: state.status.lang,
  isPersist: state.status.isPersist
});

interface CaptionProps {
  lang: SupportedLanguage;
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
        <div className="homeSubtitle">
          {getTranslation(this.props.lang, 'With Famireales - Real Estate HTML Template')}
        </div>
        <Link className="btn btn-black" to="/search">{getTranslation(this.props.lang, 'Learn More')}</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Caption);
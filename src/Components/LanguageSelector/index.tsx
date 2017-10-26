import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { changeLanguage } from 'Redux/Modules/Status';
import { getTranslation } from 'Services/Geo';
import { RootState } from 'Redux/Store';

const mapStateToProps = (state: RootState) => ({
  lang: state.status.lang
});
const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: (lang: 'en' | 'vn') => {
    dispatch(changeLanguage(lang));
  }
});
interface LanguageSelectorProps {
  changeLanguage: (lang: 'en' | 'vn') => void;
  lang: 'en' | 'vn';
}
class LanguageSelector extends React.Component<LanguageSelectorProps, {}> {
  changeLanguage = (lang: 'en' | 'vn') => {
    if (this.props.lang !== lang) {
      this.props.changeLanguage(lang);
    }
  }
  render() {
    return (
      <div className="languageSelector">
        <span className="langText">{getTranslation(this.props.lang, 'Language')}: </span>
        <ul>
          <li
            className={this.props.lang === 'en' ? ' active' : ''}
            onClick={(e) => this.changeLanguage('en')}
          >
            <span className="flag uk" />
          </li>
          <li
            className={this.props.lang === 'vn' ? ' active' : ''}
            onClick={(e) => this.changeLanguage('vn')}
          >
            <span className="flag vn" />
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
import * as React from 'react';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import { changeLanguage } from 'Redux/Modules/Status';
import { getTranslation, SupportedLanguage } from 'Services/Geo';
import { RootState } from 'Redux/Store';

const mapStateToProps = (state: RootState) => ({
  lang: state.status.lang
});
const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  changeLanguage: (lang: SupportedLanguage) => {
    dispatch(changeLanguage(lang));
  }
});
interface LanguageSelectorProps {
  changeLanguage: (lang: SupportedLanguage) => void;
  lang: SupportedLanguage;
}
class LanguageSelector extends React.Component<LanguageSelectorProps, {}> {
  changeLanguage = (lang: SupportedLanguage) => {
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
            className={this.props.lang === SupportedLanguage.en ? ' active' : ''}
            onClick={(e) => this.changeLanguage(SupportedLanguage.en)}
          >
            <span className="flag uk" />
          </li>
          <li
            className={this.props.lang === SupportedLanguage.vn ? ' active' : ''}
            onClick={(e) => this.changeLanguage(SupportedLanguage.vn)}
          >
            <span className="flag vn" />
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
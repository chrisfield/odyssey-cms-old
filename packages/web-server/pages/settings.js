import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { loadTheme } from '../flux/theme/actions';
import loadData from './_loadData';

const Settings = ({theState, loadTheme}) => {
  return (
    <Layout>
      <div className="header">
        <h1>Settings</h1>
      </div>
      <form>
        <select onChange={loadTheme} value={theState.theme.name}>
          <option value="simple">Simple</option>
          <option value="christmas">Xmas</option>
        </select>
      </form>
      <pre>{JSON.stringify(theState, undefined, 2)}</pre>
      <style jsx>{`
        background-color: yellow;
        .header {
          ${theState.theme.values.header}
        }
        .header:hover {
          ${theState.theme.values.headerHover}
        }
        .header:after {
          ${theState.theme.values.headerAfter}
        }
        .header h1 {
          background-color: inherit;
        }
      `}
      </style>
    </Layout>
  );
};

const mapStateToProps = state => ({theState: state});

const mapDispatchToProps = dispatch => ({
  loadTheme: event => dispatch(loadTheme(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  loadData({
    theme: true
  })(Settings)
);


import { loadTheme } from '../flux/theme/actions';
import { loadSection } from '../flux/section/actions';
import { setEnv } from '../flux/env/actions';
import fetch from 'isomorphic-unfetch';

const getEnv = async api => {
  const envRes = await fetch(`${api}/config`);
  const env = await envRes.json();
  env.api = api;
  return env;
};

const loadData = ({
  theme = false,
  section = false
}) => {
  const withData = (Component) => {
    const Hoc = props => (
      <Component {... props}/>
    )  
  
    Hoc.getInitialProps = async ({ctx}) => {
      const { store, isServer } = ctx;
      if (isServer) {
        const env = await getEnv(process.env.DATA_SERVER);
        store.dispatch(setEnv(env));
      }
      const state = store.getState();
      if (theme && !state.theme.name) {
        store.dispatch(loadTheme('simple'));
      }
      if (section && ctx.query.path) {
        store.dispatch(loadSection(ctx.query.path));
      }
    };
    return Hoc;
  }
  return withData;
};

export default loadData;
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import loadData from './_loadData';
import Section from '../components/section';


const Page = ({theme, section}) => {
  const router = useRouter();
  return (
    <Layout>
      <div className="header">
        <h1>{router.query.path}</h1>
      </div>
      <p>This is the blog post content.</p>
      <Section/>
      Section: <pre>{JSON.stringify(section, undefined, 2)}</pre>
      Theme: <pre>{JSON.stringify(theme, undefined, 2)}</pre>
      <style jsx>{`
        background-color: yellow;
        .header {
          ${theme.values.header}
        }
        .header:hover {
          ${theme.values.headerHover}
        }
        .header:after {
          ${theme.values.headerAfter}
        }
        .header h1 {
          background-color: inherit;
        }
      `}
      </style>
    </Layout>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  section: state.section
});

export default connect(mapStateToProps)(
  loadData({
    theme: true,
    section: true
  })(Page)
);

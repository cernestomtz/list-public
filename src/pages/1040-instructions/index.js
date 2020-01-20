import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout/Layout"
import Paragraph from "../../components/Paragraph"

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content="Readable IRS 1040 Instructions 2019"/>
        <title>IRS 1040 Instructions 2019</title>
        <link rel="canonical" href="https://govlist.net/"/>
      </Helmet>
      <section>
        <div className="container h-screen mx-auto px-4">
          <h1 className="font-bold text-xl md:text-2xl mt-4 mb-2 text-center">
            1040 Instructions
          </h1>
          <div className="w-full">
            <ul className="xs:leading-loose list-reset text-xl text-left">
              <li className="menu-item md:mr-3">
                <a href="#instructions"></a>
              </li>
              <li className="menu-item">
                <a href="#purpose"></a>
              </li>
              <li className="menu-item">
                <a href="#who-may-file"></a>
              </li>
              <li className="menu-item">
                <a href="#someid"></a>
              </li>
            </ul>
            <Paragraph
              title="What is the Purpose of This Form?"
              text="Employers must complete Form I-9 to document
              verification of the identity and employment authorization of each new employee (both citizen and noncitizen) hired after November 6, 1986, to work in the United States. In the Commonwealth of the Northern Mariana Islands (CNMI), employers must complete Form I-9 to document verification of the identity and employment authorization of each new employee (both citizen and noncitizen)
              hired after November 27, 2011."
            />
            <Paragraph
              title=""
              text=""
            />
            {/*<Paragraph title="" text="" />*/}
            {/*<Paragraph title="" text="" />*/}
            {/*<Paragraph title="" text="" />*/}
            {/*<Paragraph title="" text="" />*/}
            {/*<Paragraph title="" text="" />*/}
          </div>
        </div>
      </section>
    </Layout>
  )
};

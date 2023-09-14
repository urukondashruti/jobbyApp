import './index.css'

import Header from '../header'

import AllJobsSection from '../alljobs'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs-container">
      <div className="jobs-sections">
        <AllJobsSection />
      </div>
    </div>
  </>
)

export default Jobs

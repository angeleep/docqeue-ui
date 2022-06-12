import Layout from '../../../components/layout';

export default function New() {
  return (
    <Layout>
      <h1> New Appointment </h1>
      <form>
          <label for="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          <label for="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname"/><br/><br/>
          <input type="submit" value="Submit"/>
      </form>
    </Layout>
  )
}

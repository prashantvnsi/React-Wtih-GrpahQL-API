import React, { Component } from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const getAllArticles = gql`{
  bookings(limit: 10, filter: { matching: "a",timeState: upcoming, status: all }) {
    pageInfo{
      currentOffset
      totalPages
      totalCount
    }
    items {
      id
      service {
        status
        date
        passenger {
          firstName
        }
        pickupFlightDesignator {
          flightNumber
        }
      }
    }
  }
}`

const App = () => {
  return (
    <Query query={getAllArticles}>
      {({ loading, error, data }) => {
        if (loading) return <p>Relax, it's worth the wait...</p>
        if (error) return <p>Looks like we've got a problem...</p>
        return (
          <div className="container">
            <h1>Bookings</h1>
            <div className="row">
              {data.bookings.pageInfo.totalPages}
            </div>
            <div className="row">
              {data.bookings.items[1].id}
            </div>
          </div>
        )
      }}
    </Query>
  );
}

export default App
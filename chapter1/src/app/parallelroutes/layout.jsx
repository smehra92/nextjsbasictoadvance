//1 : This is Parallel Routing.

const ParallelRouteLayout = ({children, left, right}) => {
  return (
    <section>
        {left}
        {children}
        {right}
    </section>
  )
}
export default ParallelRouteLayout





// //2 : This is Conditional Routing.
// const ParallelRouteLayout = ({children, left, right}) => {
//     const isSideBar = false
//     return (
//       <section>
//           {children}
//           {isSideBar ? left : right}
//       </section>
//     )
//   }
//   export default ParallelRouteLayout
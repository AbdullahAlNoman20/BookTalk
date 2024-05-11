import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";


const pData = [
    {
      name: 'Python',
      student: 13,
      fees: 10
    },
    {
      name: 'Javascript',
      student: 15,
      fees: 12
    },
    {
      name: 'PHP',
      student: 5,
      fees: 10
    },
    {
      name: 'Java',
      student: 10,
      fees: 5
    },
    {
      name: 'C#',
      student: 9,
      fees: 4
    },
    {
      name: 'C++',
      student: 10,
      fees: 8
    },
  ];




const PageToRead = () => {
  return (
    <div>
      <h2 className="text-center">Statistical Representation in Line Chart </h2>

<ResponsiveContainer width="100%" aspect={3}>

        <LineChart data={pData} width={500} height={300} margin={{right:50,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preserveStartEnd'} />
            <YAxis />
            <Tooltip itemStyle={{color:'black'}} contentStyle={{backgroundColor:'yellow'}}  />
            <Legend/>
            <Line type="monotone" dataKey="student" stroke="red" activeDot={{r:8}} />
            <Line type="monotone" dataKey="fees" stroke="green" activeDot={{r:8}} />

        </LineChart>

</ResponsiveContainer>
<h1 className="text-center">Statistical Representation in Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={pData}
          margin={{
            top: 50,
            right: 50,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="text-center">Statistical Representation in Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pData}
          margin={{
            top: 50,
            right: 50,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      
    </div>
  );
};

export default PageToRead;

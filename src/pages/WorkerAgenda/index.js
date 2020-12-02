import React, { Fragment, useEffect, useState } from "react";
import "./workerAgenda.css";
import Header from "../../components/navbarBreno";
import Footer from "../../components/footerBreno";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker, { registerLocale } from "react-datepicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

const localizer = momentLocalizer(moment);
registerLocale("ptBR", ptBR);

function WorkerAgenda(props) {
  const [dateService, setDateService] = useState(new Date());
  const [worker, setWorker] = useState([]);
  const [data, setData] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [title, setTitle] = useState('Ocupado');
  const [allDay, setAllDay] = useState(true);
  const [events, setEvents] = useState([]);

  function documentoJsonParaCadastro() {
    agendaServico();
  }

  useEffect(() => {
    dadosUser();
    dadosAgendaService();
  }, []);

  async function dadosUser() {
    const id = props.match.params.id;

    try {
      let retorno = await fetch(`http://localhost:5000/workers/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      let json = await retorno.json();
      setWorker(json)
    } catch (error) {
      console.log(error);
    }
  }

  async function dadosAgendaService() {
    const id = props.match.params.id;
    console.log(id)
    try {
      let retorno = await fetch(`http://localhost:5000/agenda-servico/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      let json = await retorno.json();
      console.log(json.servicosOcupados)
      setEvents(json.servicosOcupados)
    } catch (error) {
      console.log(error);
    }
  }

  async function agendaServico() {
    try {
      let retorno = await fetch("http://localhost:5000/agenda-servico", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          "id": worker.id,
          "nameWorker": worker.name,
          "data": moment(dateService).format("DD-MM-YYYY"),
          "start": dateService,
          "end": dateService,
          "title": title,
          "allDay": allDay
        }),
      });
      let json = await retorno.json();
      console.log(json);
      
      if(json.respostaAgendamento === 'sucesso'){
        alert(json.Message)
        return;
      }
      else if(json.respostaAgendamento === 'dataOcupada'){
        alert(json.Message)
        return;
      }

      return json;
    } catch (error) {
      //alert('Erro ao fazer o agendamento')
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Header />
      <Card>
        <CardContent>Nome: {worker.name}</CardContent>
        <CardContent>Occupation: {worker.occupation}</CardContent>
      </Card>
      <div className="worker-agenda-div-principal">
        <div className="worker-agenda-div-calendar">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={events}
            style={{
              height: "70vh",
              width: "100%",
              marginRight: "45%",
              marginLeft: "20px",
            }}
          ></Calendar>
        </div>
        <div className="worker-agenda-div-data-picker">
          <h4>Data de agendamento do serviço</h4>
          <DatePicker
            dateFormat="P"
            locale="ptBR"
            selected={dateService}
            onChange={(date) => setDateService(date)}
          />
        </div>
        <button
          className="worker-agenda-button-agendar"
          onClick={() => documentoJsonParaCadastro()}
        >
          Agendar
        </button>
      </div>
      <Footer />
    </Fragment>
  );
}

export default WorkerAgenda;

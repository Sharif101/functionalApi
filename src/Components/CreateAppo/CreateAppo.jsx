import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import SubmitButton from "../Button/SubmitButton/SubmitButton";
import classes from "./CreateAppo.module.css";
import Singledoc from "./Singledoc/Singledoc";
import { dateTime } from "../../Utilits/date";

const CreateAppo = () => {
  const [docSearch, setDocSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [docHide, setDocHide] = useState(false);
  const [singleDoc, setSingleDoc] = useState("");
  const [docDetails, setDocDetails] = useState(false);

  const [patients, setPatients] = useState([]);
  const [patHide, setPatHide] = useState(false);
  const [patSearch, setPatSearch] = useState("");

  const [date, setDate] = useState("");
  const [totalfee, setTotalfee] = useState("");
  const [paid, setPaid] = useState();
  const [due, setDue] = useState();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJleHAiOjE3MDI5NTc0MTl9.gf1bk5C1CCDpmdnd9S8SnQqL37YhIbmum6EnNnnN-EA";
  const API = "https://devec.healthxbd.com/api";
  const clinicId = 1;

  const calculate = () => {
    if (totalfee > paid) {
      const dueamount = totalfee - paid;
      setDue(dueamount);
    } else {
      setDue("");
    }
  };

  useEffect(() => {
    calculate();
  }, [paid]);

  // useEffect(() => {
  //   const handleoutsideclick = (event) => {
  //     if (event.target.tagname !== "INPUT") {
  //       setDocHide(false);
  //     }
  //   };
  //   document.addEventListener("click", handleoutsideclick);
  // }, []);

  useEffect(() => {
    let dataPat = async () => {
      try {
        let response = await fetch(
          `${API}/v1/user-details/phone?number=${patSearch}&skip=0&limit=10`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let data = await response.json();

        if (response.ok) {
          setPatients(data);
        }
      } catch {
        setPatients([]);
      }
    };
    dataPat();
  }, [patSearch]);

  useEffect(() => {
    let fetchDoc = async () => {
      try {
        let response = await fetch(
          `${API}/v2/clinic/clinic-doctors?clinic_id=${clinicId}&name=${docSearch}&skip=0&limit=10`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        let data = await response.json();

        if (response.ok) {
          setDoctors(data[1]);
        }
      } catch {
        setDoctors([]);
      }
    };
    fetchDoc();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      service: {
        service_name: "telemedicine",
        service_issuer_id: 1,
        patient_id: 11,
        order_placement: "2023-12-13T16:53",
        order_status: "pending",
        order_value: totalfee,
        discount_percent: 0,
        payable_amount: totalfee,
        payment_by_customer: paid || 0,
        payment_pending: due || 0,
        delivery_fee: 0,
        payment_method: "cash on delivery",
        payment_status: "done",
        service_provider_type: "doctor",
        service_provider_id: 5,
        service_provider_fee: totalfee,
        service_provider_fee_paid: 0,
        service_provider_fee_pending: 0,
        service_provider_fee_status: "pending",
        referral_type: "clinic",
        referral_id: 1,
        referral_provider_fee: 0,
        referral_provider_fee_paid: 0,
        referral_provider_fee_pending: 0,
        referral_provider_fee_status: "pending",
        current_address: "--",
        remarks: "type",
        causes: "cause",
        type: "type",
      },
      telemedicine: {
        patient_id: 11,
        doctor_id: 5,
        booked_date: date,
      },
    };
    try {
      const response = await fetch(
        `${API}/v2/clinic-services/telemedicine/${clinicId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(details),
        }
      );

      const log = await response.json();

      if (response.ok) {
        // navigate('/appointment-today')
        alert("order");
      } else {
        alert(log.context + "!");
      }
    } catch (err) {}
  };

  return (
    <div>
      <Form title="Create Appoinment" text="Details Info">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className={classes.label}>
            <label htmlFor="">
              Search Patient by Phone:{" "}
              <input
                type="text"
                value={patSearch}
                onChange={(e) => setPatSearch(e.target.value)}
                onFocus={() => setPatHide(true)}
              />
            </label>
            {/* ------------- */}
            {patHide && (
              <div>
                {patients &&
                  patients.map((pat, i) => (
                    <div key={i}>
                      <div
                        onClick={() => {
                          setPatSearch(pat?.User?.name);
                        }}
                      >
                        <option value="">
                          {pat?.User?.name} - {pat?.User?.phone}
                        </option>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <label htmlFor="">
              Search Doctor by name:{" "}
              <input
                type="text"
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                onFocus={() => setDocHide(true)}
              />
            </label>
            {/* ---------------- */}
            {docHide && (
              <div>
                {doctors &&
                  doctors.map((doc, i) => (
                    <div key={i}>
                      <div
                        onClick={() => {
                          setDocHide(false);
                          setDocSearch(doc?.User?.name);
                          setSingleDoc(doc);
                          setDocDetails(true);
                          setDoctors([]);
                          setTotalfee(doc?.Doctor?.online_fees || "");
                        }}
                      >
                        <option value="">
                          {doc?.Doctor?.dr_title} {doc?.User?.name} |{" "}
                          {doc?.DoctorSpeciality?.speciality || "--"}
                        </option>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {docDetails && docSearch.length > 0 && (
              <Singledoc singleDoc={singleDoc} />
            )}
          </div>
          <div>
            <label htmlFor="">
              <input
                type="date"
                name=""
                id=""
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label htmlFor="">
              {" "}
              Consultation fee :{" "}
              <input type="number" name="" id="" value={totalfee} />
            </label>{" "}
            <label htmlFor="">
              paid :{" "}
              <input
                type="number"
                value={paid}
                onChange={(e) => setPaid(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Due : <input type="number" name="" id="" value={due} />
            </label>
          </div>
          <SubmitButton title="Add Doctor" />
        </form>
      </Form>
    </div>
  );
};

export default CreateAppo;

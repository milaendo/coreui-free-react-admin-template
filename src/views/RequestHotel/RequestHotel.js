import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Form,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";

function RequestHotel() {
  const [hotel, setHotel] = useState("");
  const [hotelLocation, sethotelLocation] = useState("");
  const [partner, setPartner] = useState("");
  const [roomNums, setroomNums] = useState("");
  const [guestPerRoom, setguestPerRoom] = useState("");
  const [guestNames, setguestNames] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [budget, setBudget] = useState("");
  const [specialOccation, setspecialOccation] = useState("");
  const [roomDetails, setroomDetails] = useState("");
  const [specialRequests, setspecialRequests] = useState("");

  return (
    <>
      <Col>
        <Card>
          <CardHeader>
            <strong>Request Hotel</strong>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={hotel}
                    onChange={e => setHotel(e.target.value)}
                  >
                    <Label htmlFor="depart">Hotel</Label>
                    <Input type="text" id="depart" required />
                    <FormText>
                      If you do not have a specific hotel selected, enter your
                      destination and we can search properties for you.
                    </FormText>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={hotelLocation}
                    onChange={e => sethotelLocation(e.target.value)}
                  >
                    <Label htmlFor="depart">Hotel Location</Label>
                    <Input type="text" id="depart" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="10">
                      <Label>
                        Did you find this hotel from our portfolio of partner
                        hotels?
                      </Label>
                    </Col>
                    <Col md="2">
                      <FormGroup
                        check
                        className="radio"
                        id="partner"
                        value={partner}
                        onChange={e => setPartner(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletYes"
                            name="radios"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletNo"
                            name="radios"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletNo"
                          >
                            No
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={roomNums}
                    onChange={e => setroomNums(e.target.value)}
                  >
                    <Label htmlFor="depart">Number of rooms </Label>
                    <Input type="text" id="depart" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={guestPerRoom}
                    onChange={e => setguestPerRoom(e.target.value)}
                  >
                    <Label htmlFor="depart">Guests Per Room </Label>
                    <Input type="text" id="depart" required />
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={guestNames}
                    onChange={e => setguestNames(e.target.value)}
                  >
                    <Label htmlFor="depart">Guests Per Room </Label>
                    <Input type="text" id="depart" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    row
                    value={checkin}
                    onChange={e => setCheckin(e.target.value)}
                  >
                    <Col md="2">
                      <Label htmlFor="checkin">Check-in</Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input
                        type="date"
                        id="checkin"
                        name="checkin"
                        placeholder="date"
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    row
                    value={checkout}
                    onChange={e => setCheckout(e.target.value)}
                  >
                    <Col md="2">
                      <Label htmlFor="checkin">Check-out</Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input
                        type="date"
                        id="checkin"
                        name="checkin"
                        placeholder="date"
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                  >
                    <Label htmlFor="depart">Buget Per Night</Label>
                    <Input type="text" id="depart" required />
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="10">
                      <Label>
                        Are you celebrating a special occasion on this trip?
                      </Label>
                    </Col>
                    <Col md="2">
                      <FormGroup
                        check
                        className="radio"
                        id="partner"
                        value={specialOccation}
                        onChange={e => setspecialOccation(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletYes"
                            name="radios"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletNo"
                            name="radios"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletNo"
                          >
                            No
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="notes">Room Details</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="3"
                        value={roomDetails}
                        onChange={e => setroomDetails(e.target.value)}
                      />
                      <FormText>
                        Do you want 1 King or 2 Double beds? Are you looking for
                        a base-level room? A specific view? A suite? If you have
                        a specific room request at the hotel, please provide the
                        name of the room displayed on the hotel's website.
                      </FormText>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="notes">Special Requests</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="3"
                        value={specialRequests}
                        onChange={e => setspecialRequests(e.target.value)}
                      />
                      <FormText>
                        Do you have any requests or information you would like
                        us to know about this booking?
                      </FormText>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Button
                className="float-right"
                type="submit"
                size="sm"
                color="primary"
              >
                <i className="fa fa-dot-circle-o"></i> Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default RequestHotel;

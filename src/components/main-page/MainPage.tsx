import { Route, BrowserRouter as Router, useParams, Redirect } from "react-router-dom";
import { useState } from "react";

import { Header, Column, Row, HeaderField, Select } from "../../styled";
import Zeiterfassung from "../zeiterfassung/Zeiterfassung";

import {
  MainPageLinkTab,
  MainPageTab,
  Tabs,
  Spacer,
  TabRow,
  Icon,
  IconColumn,
} from "./MainPage-Styled";
import Report from "../report/Report";

import { adminList,coworkerList, moderatorList } from "../store/store";
import Admin from "../admin/Admin";
import Moderation from "../moderation/Moderation";

interface MainPageProps {
  logout: boolean;
  setLogout: (logout: boolean) => void;
}

const MainPage = ({ logout, setLogout }: MainPageProps) => {
  // Wrong spelling leads to undefined value
  const { userName } = useParams<{ userName: string }>();
  const { tab } = useParams<{ tab: string }>();

  const [activeItem, setActiveItem] = useState(tab);
  const [selectedItem, setSelectedItem] = useState("userName");
  const isAdmin = adminList.find((admin) => admin.name === userName);
  const isModerator = moderatorList.find((mod) => mod.name === userName);
  const isWorker = coworkerList.find((worker) => worker.name === userName);

  if(!isAdmin && !isModerator && !isWorker) {
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <Router>
      {!isModerator ? (
        <Column>
          <HeaderField>
            <Header>
              Time<strong>Master</strong>
            </Header>
          </HeaderField>
          <Tabs>
            <TabRow>
              <Row>
                <MainPageLinkTab
                  to={"/" + localStorage.getItem("userName") + "/zeiterfassung"}
                  onClick={() => setActiveItem("zeiterfassung")}
                  active={activeItem === "zeiterfassung"}
                >
                  <MainPageTab>Zeiterfassung</MainPageTab>
                </MainPageLinkTab>
                <Spacer />
                <MainPageLinkTab
                  active={activeItem === "report"}
                  to={"/" + localStorage.getItem("userName") + "/report"}
                  onClick={() => setActiveItem("report")}
                >
                  <MainPageTab>Report</MainPageTab>
                </MainPageLinkTab>
                <Spacer />
                {isAdmin && (
                  <MainPageLinkTab
                    to={"/" + localStorage.getItem("userName") + "/admin"}
                    onClick={() => setActiveItem("admin")}
                    active={activeItem === "admin"}
                  >
                    <MainPageTab>Admin</MainPageTab>
                  </MainPageLinkTab>
                )}
              </Row>
              <IconColumn>
                <Icon />
                <Select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                >
                  <option value="userName">
                    {localStorage.getItem("userName")!}
                  </option>
                  <option value="logout" onClick={() => setLogout(true)}>
                    Logout
                  </option>
                </Select>
              </IconColumn>
            </TabRow>
          </Tabs>
          <Route path="/:userName/zeiterfassung" component={Zeiterfassung} />
          <Route path="/:userName/report" component={Report} />
          {isAdmin && <Route path="/:userName/admin" component={Admin} />}
        </Column>
      ) : (
        <Column>
          <HeaderField>
            <Header>
              Time<strong>Master</strong>
            </Header>
          </HeaderField>
          <Moderation />
        </Column>
      )}
    </Router>
  );
};

export default MainPage;

import React, { Fragment } from 'react'

export default function AnnouncementsBackOffice(data) {
  return (
    <Fragment>
      <label className='error'></label>
      {/* <asp:Label ID="lblError" runat="server" CssClass="error"></asp:Label> */}
      <div className="boxcontainer">
        <div className="boxtitle title-bar">
          Announcements
        </div>

        {data.rptAnnouncementsBackOffice?.length > 0 && data.rptAnnouncementsBackOffice.map((element, index) => (
          // <asp:Repeater ID="rptAnnouncementsBackOffice" runat="server">
          // {/* <HeaderTemplate> */}
          <div className="boxcontent" key={index}>
            {/* </HeaderTemplate> */}
            {/* <ItemTemplate> */}
            <div className="psg_announcement_item">
              <div className="psg_announcement_title">
                {element.AlternateTitle}
                <div className="psg_announcement_dismiss">
                  {/* <asp:LinkButton ID="btnHideAnnouncement" runat="server" CommandName="HideAnnouncement" CommandArgument='<%#Eval("AnnouncementId") %>' OnCommand="cmdAction_Command" Text="Dismiss"></asp:LinkButton> */}
                  <button id='btnHideAnnouncement'>Dismiss</button>
                </div>
              </div>
              <div className="psg_announcement_subtitle">
                {element.BeginDate} &mdash; {element.CreatedByFullName} {element.CreatedByCompanyName}
                {/* <%#FormatDate(Eval("BeginDate"))%> &mdash; <%#GetAuthor(Eval("CreatedByFullName"), Eval("CreatedByCompanyName"))%> */}
              </div>
              <div className="psg_announcement_details">{element.Details}</div>
            </div>
            {/* </ItemTemplate> */}
            {/* <FooterTemplate> */}
          </div>
          // {/* </FooterTemplate> */}
          // </asp:Repeater>
        ))}
      </div>

    </Fragment >
  )
}

export function addActivity(device, message) {

    const log = document.getElementById("activityLog");

    const activity = document.createElement("div");

    activity.className = "activity";

    activity.innerHTML = `
        <strong>${device}</strong>
        <span>${message}</span>
    `;

    log.appendChild(activity);

    while (log.children.length > 4) {

        log.removeChild(log.firstChild);

    }

    setTimeout(() => {

        if (activity.parentNode) {

            activity.remove();

        }

    }, 3000);

}

export function startNetworkActivity() {

    const activities = [

        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["ICU", "Patient Data Delivered"],
        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["Laboratory", "Lab Report Sent"],
        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["Pharmacy", "Prescription Request Received"],
        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["Administration", "Billing Data Updated"],
        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["Database", "Database Query Successful"],
        ["Firewall", "Packet Inspected"],
        ["Router", "Routing Packet"],
        ["Core Switch", "Destination Identified"],
        ["Backup", "Backup Synchronization Complete"]

    ];

    let index = 0;

    setInterval(() => {

        addActivity(
            activities[index][0],
            activities[index][1]
        );

        index++;

        if(index >= activities.length){

            index = 0;

        }

    }, 3000);

}
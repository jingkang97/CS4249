```
CS4249
│   README.md
│   index.html    
│
└───tabular
│   │
│   └───refs
│   
└───calendar
```
# Hosted UIs
tabular ui: https://super-sunburst-a667eb.netlify.app/tabular/index.html?id=1&mturk=testing
</br>
calendar ui: https://super-sunburst-a667eb.netlify.app/calendar/index.html?id=1&mturk=testing

</br>
Note: replace the id in both URL parameters into the appropriate task id to try out! The list of task IDs can be found [here](https://github.com/jingkang97/CS4249/blob/master/tabular/script.js).
 

# tabular
This folder contain files used for the tabular (clone) UI. The ```refs``` subfolder contains reference images that were used to create the clone of the original BBDC website.
</br></br>
```style.css``` is where the stylings used for the tabular UI is contained.
## Training question
```training.html``` contains the UI to be embedded into training/warm up questions in our survey. This is a simplified version of the tabular UI that will be used for UI Task Trials, that is just enough for the participants to get a feel of the UI and understand how to use them.
</br>
```training.js``` is the scripting code to validate the selected options chosen for the specific warm up questions in Qualtrics.

## UI Task trials
```index.html``` is the starting point of the tabular UI. It contains a start button for participants to click when starting a task. This an indication for our logging to record the necessary data (eg. start time).
</br></br>
```tabular.html``` is the filter page of the tabular UI that allows users to 'filter' out prospective slot dates.
</br>
```script.js``` contains the scripting code to get the filter choice that was entered by the user and store them.
</br></br>
```selection.html``` is the slot selection page of the tabular UI that presents all available time slots for the selected dates in a table form for the user to choose from.
</br>
```selection_script.js``` contains the scripting code to dynamically generate the available time slots depending on date selected, and also store the slots selected by the user.
</br></br>
```confirmation.html``` is the confirmation page of the tabular UI that shows the selected slots of the user so that the user can double confirm their selection.
</br>
```confirmation_script.js``` contains the scripting code to dynamically display the confirmation details depending on the slots selected by the user previously.
</br></br>
```fail.html``` is the landing page that notifies the user that they have chosen the wrong slots, depending on the trial task assigned.
</br></br>
```success.html``` is the landing page that notifies the user that they have successfully completed the task.
</br>
```success.js``` contains the scripting code to get the necessary data to be sent for logging.





# calendar
This folder contain files used for the calendar (proposed solution) UI. 
</br></br>
```style.css``` is where the stylings used for the calendar UI is contained.
</br>
```start_styles.css``` is where the stylings used for ```index.html```
## Training question
```training.html``` contains the UI to be embedded into training/warm up questions in our survey. This is a simplified version of the calendar UI that will be used for UI Task Trials, that is just enough for the participants to get a feel of the UI and understand how to use them.

## UI Task trials
```index.html``` is the starting point of the calendar UI. It contains a start button for participants to click when starting a task. This an indication for our logging to record the necessary data (eg. start time).
</br></br>
```task.html``` is the page showing the proposed calendar UI.
</br>
```calendar.js``` is the scripting code to generate the calendar dates and available time slots.
</br>
```submission.js``` is the scripting code to validate the slot selections of the user according to the assigned task and submit data for logging.
</br>
```logging.js``` is the scripting code to log the necessary data.
</br></br>
```confirmation.html``` is the landing page that notifies the user that they have successfully completed the task.
</br></br>
```fail.html``` is the landing page that notifies the user that they have chosen the wrong slots, depending on the trial task assigned.